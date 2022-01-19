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
import { Api401Error, Api403Error } from "./error/baseError";
dotenv.config();

interface TokenDTO {
  subject?: string;
  expiresIn?: string;
  token?: string;
}

@Service()
export default class Jwt {
  public unpackBearer = ({ BearerToken }): string => {
    if (!BearerToken) {
      throw new Api401Error("인증 토큰이 없습니다");
    }
    return BearerToken.split(" ")[1];
  };

  public genToken = (subject: string, expiresIn: string) => {
    return this.tokenGenerator({ subject, expiresIn });
  };

  private tokenGenerator = ({ subject, expiresIn }: TokenDTO) => {
    const algorithm = <Algorithm>config.jwt.algorithm;
    const jwtOptions = <SignOptions>{ algorithm, expiresIn, subject };

    if (subject === "ACCESS_TOKEN") {
      return ({ id, agency_key }) =>
        sign({ id, agency_key }, config.jwt.secret, jwtOptions);
    }
    if (subject === "REFRESH_TOKEN") {
      return ({ id, agency_key }) =>
        sign({ id, agency_key }, config.jwt.secret, jwtOptions);
    }

    return () => sign({}, config.jwt.secret, jwtOptions);
  };

  public decodeToken = ({ token }: TokenDTO) => {
    const algorithm = <Algorithm>config.jwt.algorithm;
    const jwtOptions: VerifyOptions = { algorithms: [algorithm] };

    const decodedToken = verify(token, config.jwt.secret, jwtOptions);
    if (!decodedToken) throw new Api403Error("token expired");

    return decodedToken;
  };
}
