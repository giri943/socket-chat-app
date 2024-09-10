const express = require('express');
const createServer = require("http").createServer
const { Server } = require("socket.io");
const cors = require('cors');
const port = 3000
const app = express();
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ["GET", "POST"],
        credentials: true
    }
})
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST"],
    credentials: true
}));
app.get("/", (req, res) => {
    res.send("Hellow world")
})

io.on("connection", (socket) => {
    console.log("user connected")
    console.log("Id", socket.id)
})

server.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
