import { Express } from "express";
import expressMiddlewares from "./express";
import databaseConnection from "./connect";

export default async (app: Express) => {
    await expressMiddlewares(app);
    console.log("Express Middlewares loaded");

    await databaseConnection();
    console.log("Database Connection loaded");
};
