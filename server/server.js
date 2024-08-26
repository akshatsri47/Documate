import dotenv from  'dotenv'
import express from 'express';
import ConnectDB  from './config/db.js';
import loginrouter from './routes/login.js'
import passport from './validation/passport.js';
const app = express();
app.use(express.json())
app.use(passport.initialize());
dotenv.config();
ConnectDB();

const Port = process.env.Port;
app.use('/',loginrouter);
app.listen(Port,()=>{
    console.log(`server running on ${Port}`)
});
