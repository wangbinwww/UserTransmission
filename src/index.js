/*程序用途：
    UT:三山用户信息传输装置；
    适用于三山消防系统用传装置数据解析
*/
/* 引入net模块 */
var net = require("net");
const log4js = require("log4js");
//var num = 0;
var LogOnOff = true;
log4js.configure({
  appenders: {
    everything: {
      type: "dateFile",
      filename: "logs\\log",
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
var server = net.createServer(function (socket) {
  server.getConnections(function (err, count) {
    logger.debug("设备上线 ON Line!");
    console.log("设备上线 ON Line!");
    console.log("设备在线数量是： " + count);
  });
  /* 监听data事件 */
  socket.on("data", function (RecvData) {

    // sum校验
    var SumCRC = CRCCheckOut(RecvData);
    //console.log(num++ + " Recv:" + RecvData.toString());
    if (SumCRC == true) {
      //console.log(SendMessage);
      if (LogOnOff == true) {
        var Message = "接收到SUM校验正确报文:" + RecvData.toString('hex');
        logger.debug(Message);
        console.log(Message);
        var s = JSON.stringify(MessageAnalysis(RecvData), null, ' ');
        console.log('解析数据:' + s);
        logger.debug('解析数据:' + s);
        //console.log("校验正确!");
        /* 发送数据 */
        var SendMessage = MessagePKG(RecvData);
        socket.write(SendMessage, function () {
          var Message = "---------发送应答报文:" + SendMessage.toString('hex');
          logger.debug(Message);
          console.log(Message);
        });

      }
    } else {
      //var SendMessage = CRCCalculate();
      if (LogOnOff == true) {
        var Message = "接收到SUM校验错误的报文: " + RecvData.toString('hex');
        logger.debug(Message);
        console.log(Message);
      }
      /* 发送数据 */
      //socket.write(SendMessage, function () {});
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
  //console.log(RecvData);
  //计算得到的sum用于校验
  var CalSum = 0;
  //接收buf
  var buf = Buffer.from(RecvData);
  //接收报文中的累加和校验值
  var RecvSum = buf[buf.length - 3];
  //console.log('收到字节长度: ' + buf.length);
  for (var i = 2; i < (buf.length - 3); i++) {
    CalSum = CalSum + buf[i];
  }
  CalSum = CalSum & 255;
  //验证输出
  //console.log('收到报文校验码: ' + RecvSum.toString(16));
  //console.log('计算得到校验码: ' + CalSum.toString(16));
  if (CalSum.toString(16) == RecvSum.toString(16)) {
    return true
  } else {
    return false;
  }
}

function MessagePKG(RecvData) {
  //接收buf
  const MessageBody = Buffer.from(RecvData);
  const Message = Buffer.alloc(26);
  MessageBody.copy(Message, 0, 0, 26);
  //console.log('1=' + Message.toString('hex'));
  const MessageControl = Buffer.from([0x03]);
  //console.log('2=' + MessageControl.toString('hex'));
  const SendMessage = Buffer.concat([Message, MessageControl])
  //console.log('3=' + SendMessage.toString('hex'));
  const MessageCRC = SumCRC(SendMessage);
  //console.log('4=' + MessageCRC.toString('hex'));
  const MessageEnd = Buffer.from([0x23, 0x23]);
  //console.log('5=' + MessageEnd.toString('hex'));
  const pubMessage = Buffer.concat([Message, MessageControl, MessageCRC, MessageEnd])
  //console.log('5=' + pubMessage.toString('hex'));
  // console.log(buf2);
  // console.log(buf3);
  return pubMessage //SendMessage
}
//计算累加和校验
function SumCRC(SumData) {
  //console.log(RecvData);
  //计算得到的sum用于校验
  var CalSum = 0;
  //接收buf
  var buf = Buffer.from(SumData);
  //console.log('收到用于校验字节长度: ' + buf.length);
  for (var i = 2; i < (buf.length); i++) {
    CalSum = CalSum + buf[i];
  }
  CalSum = CalSum & 255;
  var send = Buffer.from([CalSum])
  return send;

}

function MessageAnalysis(RecvData) {

  //接收buf
  let MessageBody = Buffer.from(RecvData);
  //启动符号
  //4040
  let ACode = Buffer.from([RecvData[0], RecvData[1]])
  //控制单元
  //业务流水号 2 字节
  let B1Code = Buffer.from([RecvData[2], RecvData[3]])
  //协议版本号
  let B2Code = Buffer.from([RecvData[4], RecvData[5]])
  //时间标签6字节
  let TDataTime = "20" + RecvData[11].toString(10) + "年" + RecvData[10].toString(10) + "月" + RecvData[9].toString(10) + "日" + RecvData[8].toString(10) + "时" + RecvData[7].toString(6) + "分" + RecvData[6].toString(10) + "秒"
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
  //1C010C1C0A0D0114
  //类型标志1字节
  let C1Code = Buffer.from([RecvData[27]])
  //信息对象数目1字节
  let C2Code = Buffer.from([RecvData[28]])
  //信息对象1—-4字节
  //系统类型标志1字节
  if (C1Code[0] == [0x1c]) {
    //0x1c=28=上传用户信息装置系统时间
    let mess = "上传用户信息装置系统时间"
    var C1CodeCN = Buffer.from(mess)
    let CDataTime = "20" + RecvData[34].toString(10) + "年" + RecvData[33].toString(10) + "月" + RecvData[32].toString(10) + "日" + RecvData[31].toString(10) + "时" + RecvData[30].toString(6) + "分" + RecvData[29].toString(10) + "秒"
    var C3Code = Buffer.from(CDataTime)
  }
  //校验和1字节
  let ECode = Buffer.from([RecvData[RecvData.length - 3]])
  //结束符2字节
  let FCode = Buffer.from([RecvData[RecvData.length - 2], RecvData[RecvData.length - 1]])

  //信息对象建立
  var RecvMessage = {};
  RecvMessage.启动符 = ACode.toString('utf8');
  RecvMessage.业务流水号 = B1Code.toString('hex');
  RecvMessage.协议版本号 = B2Code.toString('hex');
  RecvMessage.时间标签 = B3Code.toString('utf8');
  RecvMessage.原地址 = B4Code.toString('hex');
  RecvMessage.目的地址 = B5Code.toString('hex');
  RecvMessage.应用数据单元长度 = B6Code.toString('hex');
  RecvMessage.命令控制字 = B7Code.toString('hex');
  if (C1Code[0] == [0x1c]) {
    RecvMessage.类型标志 = C1CodeCN.toString('utf8');
    RecvMessage.信息对象数目 = C2Code.toString('hex');
    RecvMessage.信息对象1 = C3Code.toString('utf8');
  }
  RecvMessage.校验和 = ECode.toString('hex');
  RecvMessage.结束符 = FCode.toString('utf8');


  //console.log('5=' + pubMessage.toString('hex'));
  // console.log(buf2);
  // console.log(buf3);
  return RecvMessage //


}