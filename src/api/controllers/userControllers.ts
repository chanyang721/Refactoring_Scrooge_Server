import { Request, Response, NextFunction } from "express"
import { Container } from "typedi";
import { UserService } from "../../services/userService";


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const userServiceInstance = Container.get(UserService)

        await userServiceInstance.insertUser(req.body);

        res.status(200).send({ message: "회원가입 성공" })
    }
    catch (error) {
        res.status(400).send({ error })
    }
}
