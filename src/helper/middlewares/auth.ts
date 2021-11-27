import { Request, Response, NextFunction } from "express";
import { promisify } from "util"
import { sign, verify } from "jsonwebtoken"
import { Service, Container } from "typedi";
import { UserVaildationError } from "../utils/errorformat";
import Jwt from "../utils/jwt"


export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
    const JwtInstance = Container.get(Jwt)
    const authorization = req.headers["authorization"];
    const refreshToken = req.cookies["refreshToken"];
    let refreshTokenDate: any;
    let accessTokenData: any;

    if (!authorization && !refreshToken) { // 둘 다 없으면 에러
        return res.status(401).send({ message: "Unauthorized" });
    }
    
    if (!authorization) { // 엑세스 토큰이 없다면 리프레시 토큰 검증 후 엑세스 토큰 재발급
        refreshTokenDate = JwtInstance.checkToken(refreshToken, process.env.REFRESH_SECRET)

        if (refreshTokenDate) {
            const accessToken = authorization.split(" ")[1];
            accessTokenData = JwtInstance.checkToken(accessToken, process.env.ACCESS_SECRET)
        }
        throw new UserVaildationError(400, "invalid refresh token, please log in again")
    }
    

    if (!accessTokenData) {
        return res
            .status(400)
            .send({ message: "토큰이 없는 잘못된 접근입니다." });
    }


    req.body.id = accessTokenData.id;


    next();
}

