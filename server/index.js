const express = require("express");
const socket = require("socket.io");
const app = express();
const server = require("http").createServer(app); 
const io = require('socket.io')(server, {cors: { origin: "*" }});


app.use(express.json());



server.listen("3001", ()=> {
    console.log("Server runnig on Port 3001...");
});


io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log("User joined room: " + data)
    });

    socket.on("disconnect", () => {
        console.log("USER DISCONNECTED");
    });
});



