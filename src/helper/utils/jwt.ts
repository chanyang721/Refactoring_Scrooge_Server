import dotenv from "dotenv";
import {
    sign,
    verify,
    Algorithm,
    SignOptions,
    VerifyOptions,
} from "jsonwebtoken";
import { Service } from "typedi";
import config from "../../config";
import { ErrorFormat } from "./errorformat";
dotenv.config();

interface TokenDTO {
    subject?: string;
    expiresIn?: string;
    token?: string;
}

@Service()
export default class Jwt {
    public unpackBearer = ({ BearerToken }): string => {
        if (!BearerToken) throw new ErrorFormat(401, "Unauthorized");

        return BearerToken.split(" ")[1];
    };

    public genToken = (subject: string, expiresIn: string) => {
        return this.tokenGenerator({ subject, expiresIn });
    };

    private tokenGenerator = ({ subject, expiresIn }: TokenDTO) => {
        const algorithm = config.jwt.algorithm as Algorithm;
        const jwtOptions: SignOptions = { algorithm, expiresIn, subject };

        if (subject === "ACCESS_TOKEN") {
            return ({ id }) => sign({ id }, config.jwt.secret, jwtOptions);
        }
        if (subject === "REFRESH_TOKEN") {
            return ({ id }) => sign({ id }, config.jwt.secret, jwtOptions);
        }

        return () => sign({}, config.jwt.secret, jwtOptions);
    };

    public decodeToken = ({ token }: TokenDTO) => {
        const algorithm = config.jwt.algorithm as Algorithm;
        const jwtOptions: VerifyOptions = { algorithms: [algorithm] };

        const decodedToken = verify(token, config.jwt.secret, jwtOptions);
        if (!decodedToken) throw new ErrorFormat(400, "token expired");

        return decodedToken;
    };
}
