import { Request, Response, NextFunction } from "express";
import { promisify } from "util";
import { Container } from "typedi";
import { Api400Error, BaseError } from "../utils/error/baseError";
import Jwt from "../utils/jwt";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const JwtInstance = Container.get(Jwt);
  const { authorization } = req.headers;

  const token: string = JwtInstance.unpackBearer({
    BearerToken: authorization,
  });

  const auth: any = JwtInstance.decodeToken({
    subject: "ACCESS_TOKEN",
    token,
  });

  if (!auth) throw new Api400Error("Access Token expired");

  req.body.id = auth.id;
  next();
};
