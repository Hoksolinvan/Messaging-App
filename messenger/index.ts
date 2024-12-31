const express = require('express');
const {createServer} = require('node:http');
const PORT = process.env.PORT || 3012;
const {join} = require('node:path');
const {Server} = require('socket.io');

const app:any = express();
const server:any = createServer(app);
const io:any = new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'index.html'));
});


io.on('connection',(socket) =>{



    socket.on('messages',(arg) =>{
        console.log(arg);

        io.emit('messages',arg,socket.id);
    });

    

    
   console.log('a user has connected');

});




server.listen(PORT,()=>{
    console.log('server is ready!');
});
