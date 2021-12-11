// import { Request, Response, NextFunction } from "express"
// import { ErrorFormat } from "../utils/errorformat";
// import Jwt from "../utils/jwt";

// export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { decodeToken, genAccessToken } = new Jwt();

//         const { refreshToken } = req.cookies;
//         if (!refreshToken) throw new ErrorFormat(403, "refreshToken이 없습니다");

//         const decodedToken: any = decodeToken({ token: refreshToken });
//         if (!decodedToken) throw new ErrorFormat(400, "token expired");

//         const { id } = decodedToken;

//         const newAccessToken = genAccessToken("ACCESS_TOKEN", "10h")

//         res.status(200).send({
//             newAccessToken: newAccessToken({ id }),
//             message: "토큰 재발급 성공"
//         })
//     }
//     catch (error) {
//         next(error)
//     }
// }
