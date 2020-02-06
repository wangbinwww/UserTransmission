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
    var SumCRC = CRCcheckout(RecvData);
    //console.log(num++ + " Recv:" + RecvData.toString());
    if (SumCRC == true) {
      //console.log(SendMessage);
      if (LogOnOff == true) {
        var Message = "接收到SUM校验正确报文:" + RecvData.toString('hex');
        logger.debug(Message);
        console.log(Message);
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
      //var SendMessage = CRCcalculate();
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

function CRCcheckout(RecvData) {
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
  const Message = Buffer.alloc(24);
  MessageBody.copy(Message, 0, 0, 24);
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
  //接收报文中的累加和校验值
  var RecvSum = buf[buf.length - 3];
  //console.log('收到用于校验字节长度: ' + buf.length);
  for (var i = 2; i < (buf.length); i++) {
    CalSum = CalSum + buf[i];
  }
  CalSum = CalSum & 255;
  var send = Buffer.from([CalSum])
  return send;

}