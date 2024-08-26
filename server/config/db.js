import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const string = process.env.Mongo_Url;
const ConnectDB = async()=>{
    try{
    const connect = await  mongoose.connect(string)
    console.log("database connected")
    }
    catch(error){
        console.log(error.message)
    }

}
export default  ConnectDB;