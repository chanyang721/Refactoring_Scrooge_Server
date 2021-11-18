import { Request, Response, NextFunction } from "express";
import { sign, verify } from "jsonwebtoken"
import { Service } from "typedi";


export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
        const authorization = req.headers["authorization"];
        if (!authorization) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        const token = authorization.split(" ")[1];
        const data = verify(token, process.env.ACCESS_SECRET);
        
        if (!data) {
            return res
                .status(400)
                .send({ message: "토큰이 없는 잘못된 접근입니다." });
        }
        req.body.data = data;

        next();
    }

