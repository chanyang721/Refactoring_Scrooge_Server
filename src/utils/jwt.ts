import dotenv from "dotenv";
import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { Service } from "typedi";
dotenv.config();

@Service()
export default class Jwt {

    constructor() {}

    public isAuthorized = (req: Request, res: Response) => {
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
        return data;
    }

    public generateAccessToken = (data: string) => {
        return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
    }

    public generateRefreshToken = (data: string) => {
        return sign(data, process.env.REFRESH_SECRET, { expiresIn: "2h" });
    }

    public sendToken = (res: Response, accessToken: string, refreshToken: string) => {
        return res
            .status(200)
            .cookie("refreshToken", refreshToken, {
                sameSite: "none",
                secure: true,
                httpOnly: true,
            })
            .send({ data: { accessToken, refreshToken }, message: "로그인 완료" });
    }

    public resendAccessToken = (res: Response, accessToken: string, data: string) => {
        return res.send({
          data: { accessToken, user: data },
          message: "accessToken 재발급 완료",
        });
    }

    public checkRefreshToken = (refreshToken: string) => {
        try {
            return verify(refreshToken, process.env.REFRESH_SECRET);
        } catch (err) {
            return null;
        }
    }
}