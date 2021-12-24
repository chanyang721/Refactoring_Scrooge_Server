import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import Container from "typedi";
// import { User } from "../../../database/entity/user";
import { UserService } from "../../../services/userService";
import { UserRepository } from "../../../repository/userRepository";
import { ErrorFormat } from "../../utils/errorformat";
import Hashing from "../../utils/hashing";
import { User } from "../../../database/entity/user";
import { getRepository } from "typeorm";

export const createVaildation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().trim().required(),
      password: Joi.string().trim().alphanum().required(),
      name: Joi.string().trim().min(1).max(10).required(),
      birthday: Joi.string().trim().required(),
      phonenumber: Joi.string().trim().required(),
      gender: Joi.number().integer().less(2).required(),
    });

    const { value, error } = schema.validate(req.body);
    if (error) {
      console.log(error);
      throw new ErrorFormat(400, "입력값을 확인해주세요", error.message);
    }

    req.body = value;
    const { email, phonenumber } = req.body;

    const userRepo = getRepository(User);
    const duplicEmail = await userRepo.find({ where: { email } });
    const duplicNumber = await userRepo.find({ where: { phonenumber } });
    // 중복 유저 확인 //
    if (duplicEmail) {
      throw new ErrorFormat(403, "이미 사용중인 이메일입니다.");
    }
    if (duplicNumber) {
      throw new ErrorFormat(403, "이미 등록된 전화번호입니다.");
    }
    // 해당 핸드폰으로 사용중인 이메일로 인증번호 날리기 //

    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const loginVaildation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().trim().required(),
      password: Joi.string().required(),
    });

    const { value, error } = schema.validate(req.body);
    if (error) {
      console.log(error);
      throw new ErrorFormat(400, "입력값을 확인해주세요", error.message);
    }
    req.body = value;
    const { email, password } = req.body;

    const userRepo = getRepository(User);
    const registeredUser = await userRepo.find({ where: { email } });
    // 가입된 유저인지 확인 //
    if (!registeredUser) {
      throw new ErrorFormat(403, "가입되지 않은 유저입니다.");
    }
    req.body.registeredUser = registeredUser;

    // const hashing = Container.get(Hashing);
    // const verifyPassword = hashing.comparePassword(
    //   password,
    //   registeredUser[0].password
    // );
    // // 비밀번호 일치 확인 //
    // if (!verifyPassword) throw new ErrorFormat(403, "비밀번호를 확인해주세요");

    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const passwordVaildation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      id: Joi.number().optional(),
      password: Joi.string().trim().min(5).max(15).alphanum().optional(),
      newPassword: Joi.ref("password"),
    });

    const { value, error } = schema.validate(req.body, {
      abortEarly: true,
      allowUnknown: true,
    });
    if (error) {
      console.log(error);
      throw new ErrorFormat(400, "입력값을 확인해주세요", error.message);
    }

    req.body = value;
    const { password, newPassword, id } = req.body;

    const userServiceInstance = Container.get(UserService);
    const userInfo = await userServiceInstance.getUserInfoById(id);
    // await userServiceInstance.comparePassword(password, userInfo.password);
    const hashedNewPassword = await userServiceInstance.hashPassword(
      newPassword
    );

    req.body.newPassword = hashedNewPassword;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
