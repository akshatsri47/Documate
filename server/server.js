import dotenv from  'dotenv'
import express from 'express';
import { createServer } from 'http'; 
import { Server } from "socket.io";
import ConnectDB  from './config/db.js';
import loginrouter from './routes/login.js'
import passport from './validation/passport.js';
const app = express();
app.use(express.json())
app.use(passport.initialize());
dotenv.config();
ConnectDB();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",  
        methods: ["GET", "POST"]
    }
});
const Port = process.env.Port;
app.use('/',loginrouter);
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Example event handler
    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        io.emit('message', msg);  // Broadcast the message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

httpServer.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});

