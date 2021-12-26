import { Request, Response, NextFunction } from "express";
import { Api400Error } from "../utils/error/baseError";
import Jwt from "../utils/jwt";

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { decodeToken, genToken } = new Jwt();

    const { refreshToken } = req.cookies;
    if (!refreshToken) throw new Api400Error("Refresh Token이 없습니다");

    const decodedToken: any = decodeToken({ token: refreshToken });
    if (!decodedToken) throw new Api400Error("Refresh Token이 없습니다");

    const { id } = decodedToken;

    const newAccessToken = genToken("ACCESS_TOKEN", "10h");

    res.status(200).send({
      newAccessToken: newAccessToken({ id }),
      message: "토큰 재발급 성공",
    });
  } catch (error) {
    next(error);
  }
};
