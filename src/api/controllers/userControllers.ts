import { Request, Response, NextFunction } from "express"
import { ErrorFormat } from "../../helper/utils/errorformat"
import Jwt from "../../helper/utils/jwt";
import { Container } from "typedi";
import { UserService } from "../../services/userService";

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<any>=> {
    try {
        const userServiceInstance = Container.get(UserService)

        await userServiceInstance.insertUser(req.body);

        res.status(200).send({ message: "회원가입 성공" })
    }
    catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message })
    }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.body;

        const userServiceInstance = Container.get(UserService);

        const { accessToken, refreshToken } = await userServiceInstance.login({ id });
        
        res.status(200)
            .cookie("refreshToken", refreshToken, {
                sameSite: "none",
                secure: true,
                httpOnly: true,
            })
            .send({ 
                accessToken, 
                refreshToken, 
                message: "로그인 성공" 
            });
    }
    catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message })
    }
}

export const softDeleteUser = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.body;

        const userServiceInstance = Container.get(UserService);

        await userServiceInstance.softDeleteUser({ id })

        res.status(200).send({ message: "삭제되었습니다" })
    }
    catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message })
    }
}

export const updateUserInfo = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const userServiceInstance = Container.get(UserService);

        await userServiceInstance.updateUserInfo(req.body)

        res.status(200).send({ message: "수정되었습니다" })
    }
    catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message })
    }
}

export const restoreUser = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.params

        const userServiceInstance = Container.get(UserService);
    
        const { affected } = await userServiceInstance.restoreUser(id);

        res.status(200).send({ message: "복구되었습니다", affected })
    }
    catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message })
    }
}

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const JwtInstance = Container.get(Jwt)

        const refreshToken = JwtInstance.unpackBearer({ 
            BearerToken: req.cookies.refreshToken 
        })

        const { id }: any = JwtInstance.decodeToken({ token: refreshToken });

        const newAccessToken = JwtInstance.genAccessToken("ACCESS_TOKEN", "10h")

        res.status(200).send({
            accessToken: newAccessToken({ id }),
            message: "토큰 재발급 성공"
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message })
    }
}