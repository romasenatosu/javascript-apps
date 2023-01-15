const Websocket = require("ws")

const wss = new Websocket.WebSocketServer({
    port: 1919
})

wss.on('connection', (socket) => {
    socket.send('welcome')

    socket.on('message', (data) => {
        socket.send(`we got your message :  ${data}`)
    })
})
