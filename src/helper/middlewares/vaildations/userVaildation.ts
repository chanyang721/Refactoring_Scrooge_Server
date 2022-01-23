import Joi from "joi";
import Container from "typedi";
import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
// import { User } from "../../../database/entity/user";
import Hashing from "../../utils/hashing";
import UserService from "../../../services/userService";
import {
  Api400Error,
  Api404Error,
  Api409Error,
} from "../../utils/error/baseError";
import { User } from "../../../database/entity/user";
import { StatusCode } from "src/helper/utils/error/httpStatusCodes";
import { wrapTryCatch } from "../../utils/wrapTryCatch";
import logger from "../../../config/winston";

export const createVaildation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    console.error(error);
    throw new Api409Error(error.message);
  }

  req.body = value;
  const { email, phonenumber } = req.body;

  const userRepo = getRepository(User);
  const duplicEmail = await userRepo.find({ where: { email } });
  const duplicNumber = await userRepo.find({ where: { phonenumber } });

  if (duplicEmail[0]) {
    throw new Api400Error(`${duplicEmail[0]}은 사용중인 이메일 입니다`);
  }
  if (duplicNumber[0]) {
    throw new Api400Error(`${duplicNumber[0]}은 등록된 핸드폰 번호입니다`);
  }
  // 해당 핸드폰으로 사용중인 이메일로 인증번호 날리기 //

  next();
};

export const loginVaildation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    email: Joi.string().email().trim().required(),
    password: Joi.string().required(),
  });

  const { value, error } = schema.validate(req.body);
  if (error) {
    console.error(error);
    throw new Api409Error(error.message);
  }

  req.body = value;
  const { email, password } = req.body;

  const userRepo = getRepository(User);
  const registeredUser = await userRepo.find({ where: { email } });
  // 가입된 유저인지 확인 //
  if (!registeredUser[0]) {
    throw new Api404Error("해당 유저는 존재하지 않습니다");
  }
  req.body.registeredUser = registeredUser[0];

  const hashing = Container.get(Hashing);
  const verifyPassword = wrapTryCatch(
    hashing.comparePassword({
      password,
      hashedPassword: registeredUser[0].password!,
    })
  );
  // 비밀번호 일치 확인 //
  if (!verifyPassword) throw new Api400Error("비밀번호를 확인해주세요");

  next();
};

export const passwordVaildation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    password: Joi.string().trim().min(4).max(15).alphanum().required(),
    newPassword: Joi.string().trim().min(4).max(15).alphanum().required(),
  });

  const { value, error } = schema.validate(req.body, {
    abortEarly: true,
    allowUnknown: true,
  });
  if (error) {
    logger.error(error);
    throw new Api409Error(error.message);
  }

  req.body = value;
  const { password, newPassword, id } = req.body;

  const userServiceInstance = Container.get(UserService);
  const userInfo = await userServiceInstance.getUserInfoById(id);
  await userServiceInstance.comparePassword(password, userInfo.password);
  const hashedNewPassword = await userServiceInstance.hashPassword(newPassword);

  req.body.newPassword = hashedNewPassword;
  next();
};
