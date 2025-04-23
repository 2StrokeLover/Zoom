import {Server } from "socket.io";

const connectTOSocket=(server)=>{
    return new Server(server);
};
export default connectTOSocket;