import express from "express";
import {createServer} from "node:http";
import {server} from "socket.io";
const app=express();
const server=createServer(app);
const io=new Server(server);

app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("index.ejs");
});

io.on("connection",(socket)=>{
    console.log("a user connected");
});

socket.on("disconnect",()=>{
    console.log("user disconnected");
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  })