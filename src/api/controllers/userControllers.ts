import { Request, Response, NextFunction } from "express"
import { Container } from "typedi";
import { UserService } from "../../services/userService";


export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<any>=> {
    try {
        const userServiceInstance = Container.get(UserService)

        await userServiceInstance.insertUser(req.body);

        res.status(200).send({ message: "회원가입 성공" })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.body.registeredUser;

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
        res.status(400).send({ error: error.message })
    }
}

export const softDeleteUser = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.body.data;

        const userServiceInstance = Container.get(UserService);

        await userServiceInstance.softDeleteUser({ id })

        res.status(200).send({ message: "삭제되었습니다" })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
}