import dotenv from "dotenv";
import { Request, Response } from "express";
import { sign, verify, Algorithm, SignOptions, VerifyOptions, JwtPayload } from "jsonwebtoken";
import { Service } from "typedi";
import config from "../../config"
dotenv.config();

@Service()
export default class Jwt {

    public tokenGenerator = (subject: string, expiresIn: string) => {
        const algorithm = config.jwt.algorithm as Algorithm;
        const jwtOptions: SignOptions = { algorithm, expiresIn, subject }

        if(subject === "ACCESSS_TOKEN") {
            return ({ idx, id }: JwtPayload) => 
                sign({ idx, id }, config.jwt.secret, jwtOptions);
        }
        if(subject === "REFRESH_TOKEN") {
            return ({ id }: JwtPayload) =>
                sign({ id }, config.jwt.secret, jwtOptions);
        }

        return () => sign({}, config.jwt.secret, jwtOptions);
    }
    // public sendToken = (res: Response, accessToken: string, refreshToken: string) => {
    //     return res
    //         .status(200)
    //         .cookie("refreshToken", refreshToken, {
    //             sameSite: "none",
    //             secure: true,
    //             httpOnly: true,
    //         })
    //         .send({ data: { accessToken, refreshToken }, message: "로그인 완료" });
    // }

    // public resendAccessToken = (res: Response, accessToken: string, data: string) => {
    //     return res.send({
    //         data: { accessToken, user: data },
    //         message: "accessToken 재발급 완료",
    //     });
    // }

    public decodeToken = (subject: string, token: string) => {
        const algorithm = config.jwt.algorithm as Algorithm;
        const jwtOptions: VerifyOptions = { algorithms: [algorithm], subject }
        
        return verify(token, config.jwt.secret, jwtOptions);
    }
}