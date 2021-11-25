import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import Container from "typedi"
import { getRepository } from "typeorm"
import { User } from "../../../database/entity/user"
import { UserVaildationError } from "../../utils/errorformat"
import Hashing from "../../utils/hashing"


export const createVaildation = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().trim().required(),
            password: Joi.string().trim().alphanum().required(),
            name: Joi.string().trim().min(1).max(10).required(),
            birthday: Joi.string().trim().required(),
            phonenumber: Joi.string().trim().required(),
            gender: Joi.number().integer().less(2).required()
        })
        
        const { value, error } = schema.validate(req.body)
        if (error) return res.status(403).send({ error });
        
        req.body = value;
        const { email, phonenumber } = req.body
    
        const userRepo = getRepository(User);
        const duplicEamil = await userRepo.findOne({ email });
        const duplicPhonenNumber = await userRepo.findOne({ phonenumber });
        // 중복 유저 확인 //
        if(duplicEamil) throw new UserVaildationError(403, "이미 사용중인 이메일입니다.");
        if(duplicPhonenNumber) throw new UserVaildationError(403, "이미 등록된 전화번호입니다.");
        // 해당 핸드폰으로 사용중인 이메일로 인증번호 날리기 //
    
        next();
    }
    catch (error) {
        console.log(error)
        res.status(400).send({ error })
    }
}


export const loginVaildation = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().trim().required(),
            password: Joi.string().required()
        })

        const { value, error } = schema.validate(req.body)
        if (error) return res.status(403).send({ error });
    
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
        console.log(error)
        res.status(400).send({ error })
    }
}