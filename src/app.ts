import "reflect-metadata";
import express from "express";
import loaders from "./loaders";
import { addItem } from "./config/notion_calender";

const server = async () => {
  const app = express();
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || "localhost";

  await loaders(app);

  app.listen(port, () => {
    console.log(`server start on [ http://${host}:${port} ]`);
  });
};

server();

export default server;
