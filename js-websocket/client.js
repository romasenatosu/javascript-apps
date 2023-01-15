const Websocket  = require('ws')

const ws = new Websocket('ws://localhost:1919')

ws.onmessage = (e) => {
    console.log("message from the server: ", e.data)
}

ws.onopen = (e) => {
    ws.send('hello server')
}

ws.onerror = (e) => {
    console.log(e.error)
}

ws.onclose = (e) => {
    console.log('connection is closed')
}


