import dotenv from "dotenv";
import { Request, Response } from "express";
import { sign, verify, Algorithm, SignOptions, JwtPayload } from "jsonwebtoken";
import { Service } from "typedi";
import config from "../../config"
dotenv.config();

@Service()
export default class Jwt {

    public tokenGenerator = (subject: string, expiresIn: string) => {
        const algorithm = config.jwt.algorithm as Algorithm;
        const JwtOptions: SignOptions = { algorithm, expiresIn, subject }

        if(subject === "ACCESSS_TOKEN") {
            return ({ idx, id }: JwtPayload) => 
                sign({ idx, id }, config.jwt.secret, JwtOptions);
        }
        if(subject === "REFRESH_TOKEN") {
            return ({ id }: JwtPayload) =>
                sign({ id }, config.jwt.secret, JwtOptions);
        }

        return () => sign({}, config.jwt.secret, JwtOptions);
    }

    // public generateAccessToken = (data: object) => {
    //     return sign(data, process.env.ACCESS_SECRET, { expiresIn: "10h" });
    // }

    // public generateRefreshToken = (data: object) => {
    //     return sign(data, process.env.REFRESH_SECRET, { expiresIn: "90d" });
    // }

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

    public checkToken = (token: string, secret: string) => {
        try {
            return verify(token, secret);
        } catch (err) {
            return null;
        }
    }
}