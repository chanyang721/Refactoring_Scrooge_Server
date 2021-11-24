import "reflect-metadata";
import express from "express";
import loaders from "./loaders"
import config from "./config"

const server = async () => {
    try {
        const app = express();
        const port = config.port;
        const host = config.host;
    
        await loaders(app);
    
        app.listen(port, () => {
            console.log(`server start on [ http://${host}:${port} ]`)
        });
    }
    catch(error) {
        console.log(error)
    }
}

server();

export default server;
