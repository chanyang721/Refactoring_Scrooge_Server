import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import Container from "typedi"
import { getRepository } from "typeorm"
import { User } from "../../../database/entity/user"
import { UserVaildationError } from "../../utils/errorformat"
import Hashing from "../../utils/hashing"


export const createVaildation = async(req: Request, res: Response, next: NextFunction): Promise<any> => {

    const schema = Joi.object({
        // email: Joi.string().email().trim().required(),
        // password: Joi.string().required()
    })

    const { value, error } = schema.validate(req.body)
    if (error) {
        return res.status(403).json({ error })
    }

    req.body = value;
    const { email, phonenumber } = req.body

    const userRepo = getRepository(User);
    const duplicUser = userRepo.findOne({ email, phonenumber });
    // 중복 유저 확인 //
    if(duplicUser) throw new UserVaildationError(403, "이미 존재하는 유저입니다.");

    next();
}


export const loginVaildation = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().trim().required(),
            password: Joi.string().required()
        })

        const { value, error } = schema.validate(req.body)
        if (error) return res.status(403).json({ error });
    
        req.body = value;
        const { email, password } = req.body;
        
        const userRepo = getRepository(User);
        const registeredUser = await userRepo.findOne({ email });
        // 가입된 유저인지 확인 //
        if(!registeredUser) throw new UserVaildationError(403, "가입되지 않은 유저입니다.")
        req.body.registeredUser = registeredUser;

        const hashing = Container.get(Hashing)
        const verifyPassword = await hashing.comparePassword(password, registeredUser.password)
        // 비밀번호 일치 확인 //
        if(!verifyPassword) throw new UserVaildationError(403, "비밀번호를 확인해주세요");

        next();
    }
    catch (error) {
        res.status(400).send({ error })
    }
}