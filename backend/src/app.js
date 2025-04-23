import express from 'express';

import {createServer} from 'node:http';

// import {Server} from "socket.io";
import connectToSocket from "./controllers/socketManager.js";
import mongoose from "mongoose";

import cors from "cors";




const app=express();
const server =createServer(app);
const io= connectToSocket(server);

app.use(cors());
app.use(express.json({'limit':'40kb'})) //to limit the size of payload 
app.use(express.urlencoded({'limit':'40kb','extended':true})); 

app.set('port' ,(process.env.PORT || 8000));
app.get('/home',(req,res)=>{
    return res.json({'Hello':'world'});
})

const start= async()=>{
    
    const connectionDB= await mongoose.connect('mongodb+srv://samarthZerodha:samarthZerodha@manitvideocall.ocz5rcq.mongodb.net/');
    console.log(`MONGO connected on DB host: ${connectionDB.connection.host}`);
    server.listen(app.get('port'),()=>{
        console.log(`LISTENING on port ${app.get("port")}`);
    });
}

start();