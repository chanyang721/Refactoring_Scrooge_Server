import dotenv from "dotenv";
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
            return ({ id }) => sign({ id }, config.jwt.secret, jwtOptions);
        }
        if(subject === "REFRESH_TOKEN") {
            return ({ id }) => sign({ id }, config.jwt.secret, jwtOptions);
        }

        return () => sign({}, config.jwt.secret, jwtOptions);
    }

    public decodeToken = (subject: string, token: string) => {
        const algorithm = config.jwt.algorithm as Algorithm;
        const jwtOptions: VerifyOptions = { algorithms: [algorithm], subject }
        
        return verify(token, config.jwt.secret, jwtOptions);
    }
}