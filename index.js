const WebSocketServer = require("ws").Server;

const wss = new WebSocketServer({
  port: 3000,
});

wss.on("connection", function (ws) {
  console.log(`[SERVER] connection()`);
  ws.on("message", async function (message) {
    console.log(`[SERVER] Received: ${message}`);
    setTimeout(() => {
      console.log('启动监听读卡器')
      ws.send('读卡信息：测试卡', err => {
        if(err) console.log(err)
      })
    }, 20000)
  });

});

