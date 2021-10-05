import "reflect-metadata";
import express from "express";
import expressMiddlewares from "./middlewares/express";
import expressRouters from "./routes"

const server = async () => {
    const app = express();
    const port = process.env.PORT || 3000;
    const host = process.env.HOST || "127.0.0.1";

    await expressMiddlewares(app);

    await expressRouters(app);

    app.listen(port, () => {
        console.log(`서버[ http://${host}:${port} ]가 ${port}포트에서 작동중입니다.`)
    });
}

server();

export default server;