import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan"
import cors from "cors";
import errorHandler from "errorhandler";
import cookieParser from "cookie-parser";
import routers from "../api/routers"
import config from "../config"

export default async (app: Express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser());
    app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"))
    app.use(cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept, Authorization, x-lifeplan-key"],
        exposedHeaders: "x-lifeplan-key",
        maxAge: 3600 * 5,
        credentials: true
    }))

    app.use(config.api.prefix, routers);
    
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
          res
            .status(404)
            .json({ message: "Invalid Request" })
    });

    app.use(errorHandler)
}