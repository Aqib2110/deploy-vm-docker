import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080})

wss.on("connection",(ws:WebSocket)=>{
    ws.send("connected to websocket")
    ws.on("error",(err)=>{
    ws.send(JSON.stringify({
        error:err
    }))
    })
    ws.on("message",(msg:any)=>{
    const messages = JSON.parse(msg);
    ws.send(JSON.stringify({
        message:messages
    }))
    })
})