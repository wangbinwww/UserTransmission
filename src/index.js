/*程序用途：
    UT:三山用户信息传输装置；
    适用于三山消防系统用传装置数据解析
*/


/* 引入net log4js path模块 */
const net = require('net');
const log4js = require('log4js');
const path = require('path');

// server.js
const jsonServer = require('json-server');
const jserver = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, '../src/db3001.json'));
const middlewares = jsonServer.defaults({
  watch: true,
  //delay: 50,
  static: path.resolve(__dirname, '../src/static/'),
});
jserver.use(middlewares);
jserver.use(router);
jserver.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}))
jserver.listen(3002, () => {
  console.log('JSON Server is running at http://127.0.0.1:3002')
})

let LogOnOff = true;
log4js.configure({
  appenders: {
    everything: {
      type: "dateFile",
      //mac
      filename: "logs\\log",
      //windows
      //filename: path.resolve(__dirname, '../logs/log'),
      //日志名称例子
      //pattern: 'yyyy-MM-dd hh-mm.log'
      pattern: "yyyy-MM-dd.log"
    }
  },
  categories: {
    default: {
      appenders: ["everything"],
      level: "debug"
    }
  }
});
const logger = log4js.getLogger("everything");
/* 创建TCP服务器 */
let server = net.createServer(function (socket) {
  server.getConnections(function (err, count) {
    logger.debug("设备上线 ON Line!");
    console.log("设备上线 ON Line!");
    console.log("设备在线数量是： " + count);
  });
  /* 监听data事件 */
  socket.on("data", function (RecvData) {

    // sum校验
    let SumCRC = CRCCheckOut(RecvData);
    //console.log(num++ + " Recv:" + RecvData.toString());
    if (SumCRC == true) {
      if (LogOnOff == true) {
        let Message = "接收到SUM校验正确报文:" + RecvData.toString('hex');
        logger.debug(Message);
      }
      console.log(Message);
      let C2CodeLoop = Buffer.from([RecvData[28]])
      for (let i = 0; i < C2CodeLoop[0]; i++) {
        let OffsetLoop = i * 46 + 29;
        //console.log(OffsetLoop);
        let s = JSON.stringify(MessageAnalysis(RecvData, OffsetLoop), null, ' ');
        console.log('解析数据:' + s);
        logger.debug('解析数据:' + s);
        //这里更新数据库状态
      }
      /* 发送数据 */
      let SendMessage = MessagePKG(RecvData);
      socket.write(SendMessage, function () {
        let Message = "---------发送应答报文:" + SendMessage.toString('hex');
        logger.debug(Message);
        console.log(Message);
      });

    } else {
      //let SendMessage = CRCCalculate();
      if (LogOnOff == true) {
        let Message = "接收到SUM校验错误的报文: " + RecvData.toString('hex');
        logger.debug(Message);
        console.log(Message);
      }
    }
  });
  socket.on("close", function () {
    logger.debug("设备下线 OFF Line！ ");
    console.log("close事件--客户机下线 OFF Line！ ");
  });
  socket.on("error", function (err) {
    console.log("error事件--错误信息： " + err);
  });
});

/* 设置连接的服务器 */
server.listen(5001, function () {
  logger.debug("程序启动:创建本机TCP Server 监听端口5001!");
  console.log("创建本机TCP Server 监听端口5001!");
});
/* 允许的最大连接数量*/
server.maxConnections = 3;
//计算收到数据的 sum累加和 校验

function CRCCheckOut(RecvData) {
  if (RecvData.length < 17) {
    return false;
  }
  //计算得到的sum用于校验
  let CalSum = 0;
  //接收buf
  let buf = Buffer.from(RecvData);
  //接收报文中的累加和校验值
  let RecvSum = buf[buf.length - 3];
  //console.log('收到字节长度: ' + buf.length);
  for (let i = 2; i < (buf.length - 3); i++) {
    CalSum = CalSum + buf[i];
  }
  CalSum = CalSum & 255;
  if (CalSum.toString(16) == RecvSum.toString(16)) {
    return true
  } else {
    return false;
  }
}

function MessagePKG(RecvData) {
  //接收buf
  let MessageBody = Buffer.from(RecvData);
  let Message = Buffer.alloc(26);
  MessageBody.copy(Message, 0, 0, 26);
  Message[24] = [0x00];
  //console.log('1=' + Message.toString('hex'));
  let MessageControl = Buffer.from([0x03]);
  //console.log('2=' + MessageControl.toString('hex'));
  let SendMessage = Buffer.concat([Message, MessageControl])
  //console.log('3=' + SendMessage.toString('hex'));
  let MessageCRC = SumCRC(SendMessage);

  //console.log('4=' + MessageCRC.toString('hex'));
  let MessageEnd = Buffer.from([0x23, 0x23]);
  //console.log('5=' + MessageEnd.toString('hex'));
  let pubMessage = Buffer.concat([Message, MessageControl, MessageCRC, MessageEnd])
  return pubMessage //SendMessage
}
//计算累加和校验
function SumCRC(SumData) {
  //console.log(RecvData);
  //计算得到的sum用于校验
  let CalSum = 0;
  //接收buf
  let buf = Buffer.from(SumData);
  //console.log('收到用于校验字节长度: ' + buf.length);
  for (let i = 2; i < (buf.length); i++) {
    CalSum = CalSum + buf[i];
  }
  CalSum = CalSum & 255;
  let send = Buffer.from([CalSum])
  return send;

}

function MessageAnalysis(RecvData, LoopNum) {

  //启动符号
  //4040
  let ACode = Buffer.from([RecvData[0], RecvData[1]])
  //控制单元
  //业务流水号 2 字节
  let B1Code = Buffer.from([RecvData[3], RecvData[2]])
  //协议版本号
  let B2Code = Buffer.from([RecvData[4], RecvData[5]])
  //时间标签6字节
  let TDataTime = "20" + RecvData[11].toString(10) + "年" + RecvData[10].toString(10) + "月" + RecvData[9].toString(10) + "日" + RecvData[8].toString(10) + "时" + RecvData[7].toString(10) + "分" + RecvData[6].toString(10) + "秒"
  let B3Code = Buffer.from(TDataTime)
  //原地址6字节
  let B4Code = Buffer.from([RecvData[17], RecvData[16], RecvData[15], RecvData[14], RecvData[13], RecvData[12]])
  //目的地址6字节
  let B5Code = Buffer.from([RecvData[23], RecvData[22], RecvData[21], RecvData[20], RecvData[19], RecvData[18]])
  //应用数据单元长度2字节
  let B6Code = Buffer.from([RecvData[25], RecvData[24]])
  //命令控制字1字节
  let B7Code = Buffer.from([RecvData[26]])
  //应用数据单元<1024字节
  //类型标志1字节
  let C1Code = Buffer.from([RecvData[27]])
  let C1CodeCN = MarkType(C1Code[0])
  //信息对象数目1字节
  let C2Code = Buffer.from([RecvData[28]])

  let C8Code = []
  let C8CodeCN = []
  if (C1Code[0] == [0x15]) {
    //上传用户信息传输装置运行状态
    C8Code = Buffer.from([RecvData[29]])
    C8CodeCN = Buffer.from(SystemTypeClass(C8Code[0]))
  }

  var CDataTime = '';
  var C3Code = [];
  if (C1Code[0] == [0x1c]) {
    //0x1c=28=上传用户信息装置系统时间
    CDataTime = "20" + RecvData[34].toString(10) + "年" + RecvData[33].toString(10) + "月" + RecvData[32].toString(10) + "日" + RecvData[31].toString(10) + "时" + RecvData[30].toString(10) + "分" + RecvData[29].toString(10) + "秒"
    C3Code = Buffer.from(CDataTime)
  }

  var C7CodeCN = [];
  var C9Code = [];
  var C4Code = [];
  var C4CodeCN = '';
  var C5Code = [];
  var C6Code = [];
  var C6CodeCN = '';

  if (C1Code[0] == [0x02]) {
    //0x02=上传建筑消防设施部件运行状态

    C4Code = Buffer.from([RecvData[LoopNum]])
    C4CodeCN = SystemType(C4Code[0])
    C5Code = Buffer.from([RecvData[LoopNum + 1]])
    C6Code = Buffer.from([RecvData[LoopNum + 2]])
    C6CodeCN = PartType(C6Code[0])

    let ParAddH = RecvData[LoopNum + 5].toString(10);
    if (ParAddH.length < 3) {
      ParAddH = '0' + ParAddH;
    }
    if (ParAddH.length < 2) {
      ParAddH = '0' + ParAddH;
    }
    let ParAddL = RecvData[LoopNum + 3].toString(10);
    if (ParAddL.length < 3) {
      ParAddL = '0' + ParAddL;
    }
    if (ParAddL.length < 2) {
      ParAddL = '0' + ParAddL;
    }
    let ParAdd = ParAddH + ParAddL

    C7CodeCN = Buffer.from(ParAdd)
    C8Code = Buffer.from([RecvData[LoopNum + 7]])
    C8CodeCN = Buffer.from(DevPartTypeClass(C8Code[0]))
    C9Code = Buffer.alloc(30);
    RecvData.copy(C9Code, 0, LoopNum + 9, LoopNum + 39);
  }
  //校验和1字节
  let ECode = Buffer.from([RecvData[RecvData.length - 3]])
  //结束符2字节
  let FCode = Buffer.from([RecvData[RecvData.length - 2], RecvData[RecvData.length - 1]])
  //信息对象建立
  let RecvMessage = {};
  RecvMessage.启动符 = ACode.toString('utf8');
  RecvMessage.业务流水号 = B1Code.toString('hex');
  RecvMessage.协议版本号 = B2Code.toString('hex');
  RecvMessage.时间标签 = B3Code.toString('utf8');
  RecvMessage.原地址 = B4Code.toString('hex');
  RecvMessage.目的地址 = B5Code.toString('hex');
  RecvMessage.应用数据单元长度 = B6Code.toString('hex');
  RecvMessage.命令控制字 = B7Code.toString('hex');
  RecvMessage.类型标志 = C1CodeCN;
  RecvMessage.信息对象数目 = C2Code.toString('hex');
  if (C1Code[0] == [0x15]) {
    RecvMessage.信息内容 = C8CodeCN.toString('utf8');
  }
  if (C1Code[0] == [0x1c]) {
    RecvMessage.信息内容 = C3Code.toString('utf8');
  };
  if (C1Code[0] == [0x02]) {
    RecvMessage.系统类型标志 = C4CodeCN.toString('utf8');
    RecvMessage.系统地址 = C5Code.toString('hex');
    RecvMessage.部件类型 = C6CodeCN.toString('utf8');
    RecvMessage.部件地址 = C7CodeCN.toString('utf8');
    RecvMessage.部件状态code = C8Code.toString('hex');
    RecvMessage.部件状态 = C8CodeCN.toString('utf8');
    RecvMessage.部件说明 = C9Code.toString('hex');
  };

  RecvMessage.校验和 = ECode.toString('hex');
  RecvMessage.结束符 = FCode.toString('utf8');
  return RecvMessage //
}
//表4 系统类型定义表
function SystemType(num) {
  let Type = ['通用',
    '火灾报警系统',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '消防联动控制器',
    '消火栓系统',
    '自动喷水灭火系统',
    '气体灭火系统',
    '水喷雾灭火系统（ 泵启动方式）',
    '水喷雾灭火系统（ 压力容器启动方式）',
    '泡沫灭火系统',
    '干粉灭火系统',
    '防烟排烟系统',
    '防火门及卷帘系统',
    '消防电梯',
    '消防应急广播',
    '消防应急照明和疏散指示系统',
    '消防电源',
    '消防电话',
  ]
  return (Type[num])
}

// 表5 建筑消防设施部件类型定义表
function PartType(num) {
  let Type = [
    '通用',
    '火灾报警控制器',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '可燃气体探测器',
    '点型可燃气体探测器',
    '独立式可燃气体探测器',
    '线型可燃气体探测器',
    '预留',
    '预留',
    '电气火灾监控报警器',
    '剩余电流式电气火灾监控探测器',
    '测温式电气火灾监控探测器',
    '预留',
    '预留',
    '探测回路',
    '火灾显示盘',
    '手动火灾报警按钮',
    '消火栓按钮',
    '火灾探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '感温火灾探测器',
    '点型感温火灾探测器',
    '点型感温火灾探测器（S型）',
    '点型感温火灾探测器（R型）',
    '线型感温火灾探测器',
    '线型感温火灾探测器（S型）',
    '线型感温火灾探测器（R型）',
    '光纤感温火灾探测器',
    '预留',
    '预留',
    '感烟火灾探测器',
    '点型离子感烟火灾探测器',
    '点型光电感烟火灾探测器',
    '线型光束感烟火灾探测器',
    '吸气式感烟火灾探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '复合式火灾探测器',
    '复合式感烟感温火灾探测器',
    '复合式感光感温火灾探测器',
    '复合式感光感烟火灾探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '紫外火焰探测器',
    '红外火焰探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '感光火灾探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '气体探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '图像摄像方式火灾探测器',
    '感声火灾探测器',
    '预留',
    '气体灭火控制器',
    '消防电气控制装置',
    '消防控制室图形显示装置',
    '模块',
    '输入模块',
    '输出模块',
    '输入/输出模块',
    '中继模块',
    '预留',
    '预留',
    '消防水泵',
    '消防水箱',
    '预留',
    '预留',
    '喷淋泵',
    '水流指示器',
    '信号阀',
    '报警阀',
    '压力开关',
    '预留',
    '阀驱动装置',
    '防火门',
    '防火阀',
    '通风空调',
    '泡沫液泵',
    '管网电磁阀',
    '预留',
    '预留',
    '预留',
    '预留',
    '防烟排烟风机',
    '预留',
    '排烟防火阀',
    '常闭送风口',
    '排烟口',
    '电控档烟垂璧',
    '防火卷帘控制器',
    '防火门控制器',
    '预留',
    '预留',
    '警报装置'
  ]
  return (Type[num])
}

//表3 类型标志定义表
function MarkType(num) {
  let Type = [
    '预留',
    '上传建筑消防设施系统状态',
    '上传建筑消防设施部件运行状态',
    '上传建筑消防设施部件模拟量值',
    '上传建筑消防设施操作信息',
    '上传建筑消防设施软件版本',
    '上传建筑消防设施系统配置情况',
    '上传建筑消防设施部件配置情况',
    '上传建筑消防设施系统时间',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '上传用户信息传输装置运行状态',
    '预留',
    '预留',
    '上传用户信息传输装置操作信息',
    '上传用户信息传输装置软件版本',
    '上传用户信息传输装置配置情况',
    '预留',
    '上传用户信息传输装置系统时间',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '读建筑消防设施系统状态',
    '读建筑消防设施部件运行状态',
    '读建筑消防设施部件模拟量值',
    '读建筑消防设施操作信息',
    '读建筑消防设施软件版本',
    '读建筑消防设施系统配置情况',
    '读建筑消防设施部件配置情况',
    '读建筑消防设施系统时间',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '读用户信息传输装置运行状态',
    '预留',
    '预留',
    '读用户信息传输装置操作信息记录',
    '读用户信息传输装置软件版本',
    '读用户信息传输装置配置情况',
    '预留',
    '读用户信息传输装置系统时间',
    '初始化用户信息传输装置',
    '同步用户信息传输装置时钟',
    '查岗命令',
  ]
  return (Type[num])
}


//图 6 建筑消防设施系统状态数据结构
function DevSystemTypeClass(num) {

  if (num == 01) {
    return '正常运行状态';
  }
  if (num == 02) {
    return '火警';
  }
  if (num == 04) {
    return '故障';
  }
  if (num == 08) {
    return '屏蔽';
  }
  if (num == 16) {
    return '监管';
  }
  if (num == 32) {
    return '启动（开启）';
  }
  if (num == 64) {
    return '反馈';
  }
  if (num == 128) {
    return '延时状态';
  }
  if (num == 256) {
    return '主电故障';
  }
  if (num == 512) {
    return '备电故障';
  }
  if (num == 1024) {
    return '总线故障';
  }
  if (num == 2048) {
    return '手动状态';
  }
  if (num == 4096) {
    return '配置改变';
  }
  if (num == 8192) {
    return '复位';
  }
  return '无';
}

//图7 建筑消防设施施部件状态数据结构
function DevPartTypeClass(num) {

  if (num == 01) {
    return '正常运行状态';
  }
  if (num == 02) {
    return '火警';
  }
  if (num == 04) {
    return '故障';
  }
  if (num == 08) {
    return '屏蔽';
  }
  if (num == 16) {
    return '监管';
  }
  if (num == 32) {
    return '启动（开启）';
  }
  if (num == 64) {
    return '反馈';
  }
  if (num == 128) {
    return '延时状态';
  }
  if (num == 256) {
    return '电源故障';
  }
  return '无';
}

//图 9 建筑消防设施操作信息数据结构
function DevControlClass(num) {

  if (num == 01) {
    return '复位';
  }
  if (num == 02) {
    return '消音';
  }
  if (num == 04) {
    return '手动报警';
  }
  if (num == 08) {
    return '警情消除';
  }
  if (num == 16) {
    return '自检';
  }
  if (num == 32) {
    return '确认';
  }
  if (num == 64) {
    return '测试';
  }
  return '无';
}

//图 13 用户信息传输装置运行状态结构
function SystemTypeClass(num) {

  if (num == 01) {
    return '正常监视状态';
  }
  if (num == 02) {
    return '火警';
  }
  if (num == 04) {
    return '故障';
  }
  if (num == 08) {
    return '主电故障';
  }
  if (num == 16) {
    return '备电故障';
  }
  if (num == 32) {
    return '与监控中心通信故障';
  }
  if (num == 64) {
    return '监测链接线路故障';
  }
  return '无';
}

//图 14 用户信息传输装置操作信息数据结构

function SystemControlClass(num) {

  if (num == 01) {
    return '复位';
  }
  if (num == 02) {
    return '消音';
  }
  if (num == 04) {
    return '手动报警';
  }
  if (num == 08) {
    return '警情消除';
  }
  if (num == 16) {
    return '自检';
  }
  if (num == 32) {
    return '查岗应答';
  }
  if (num == 64) {
    return '测试';
  }
  return '无';
}