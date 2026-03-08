// server.js
const { createServer } = require('http')
const { setupWSConnection } = require('y-websocket/bin/utils')
const WebSocket = require('ws')

const server = createServer()
const wss = new WebSocket.Server({ server })

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req)
})

const port = process.env.PORT || 1234
server.listen(port, () => {
  console.log(`Yjs WebSocket server running on port ${port}`)
})