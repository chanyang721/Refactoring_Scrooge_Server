import "reflect-metadata";
import express from "express";
import expressMiddlewares from "./loaders/express";
import loaders from "./loaders"

const server = async () => {
    const app = express();
    const port = process.env.PORT || 3000;
    const host = process.env.HOST || "127.0.0.1";

    await loaders(app);

    app.listen(port, () => {
        console.log(`server start on [ http://${host}:${port} ]`)
    });
}

server();

export default server;