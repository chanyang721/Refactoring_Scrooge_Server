import dotenv from "dotenv";
import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { Service } from "typedi";
dotenv.config();

@Service()
export default class Jwt {

    public generateAccessToken = (data: object) => {
        return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1d" });
    }

    public generateRefreshToken = (data: object) => {
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