import {Request, Response, NextFunction} from "express";
import {promisify} from "util";
import {Container} from "typedi";
import {ErrorFormat} from "../utils/errorformat";
import Jwt from "../utils/jwt";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    const JwtInstance = Container.get(Jwt);
    const {authorization} = req.headers;

    const token: string = JwtInstance.unpackBearer({
        BearerToken: authorization,
    });

    const auth: any = JwtInstance.decodeToken({
        subject: "ACCESS_TOKEN",
        token,
    });

    if (!auth) throw new ErrorFormat(400, "token expired");

    req.body.id = auth.id;

    next();
};
