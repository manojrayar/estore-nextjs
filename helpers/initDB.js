import mongoose from "mongoose";

function initDB(){
    console.log("initDB")
    if(mongoose.connections[0].readyState){
        console.log("Already connected");
        return
    }
    mongoose.connect(process.env.MONGO_URL)

    mongoose.connection.on('connected',()=>{
        console.log("Connected to Mongodb");
    })
    mongoose.connection.on('error',(err)=>{
        console.log(err.message);
    })
}

export default initDB;