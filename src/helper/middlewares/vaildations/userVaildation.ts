import Joi from "joi";
import Container from "typedi";
import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
// import { User } from "../../../database/entity/user";
import Hashing from "../../utils/hashing";
import UserService from "../../../services/userService";
import { Api400Error, BaseError } from "../../utils/error/baseError";
import { User } from "../../../database/entity/user";
import { StatusCode } from "src/helper/utils/error/httpStatusCodes";
import { wrapTryCatch } from "../../utils/wrapTryCatch";

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
    throw new BaseError("Conflict", StatusCode.Conflict, error.message);
  }

  req.body = value;
  const { email, phonenumber } = req.body;

  const userRepo = getRepository(User);
  const duplicEmail = await userRepo.find({ where: { email } });
  const duplicNumber = await userRepo.find({ where: { phonenumber } });

  if (duplicEmail[0]) {
    throw new Api400Error(`중복된 이메일을 가진 유저가 존재합니다`);
  }
  if (duplicNumber[0]) {
    throw new Api400Error(`이미 등록된 핸드폰 번호입니다`);
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
    throw new BaseError("Conflict", StatusCode.Conflict, error.message);
  }
  req.body = value;
  const { email, password } = req.body;

  const userRepo = getRepository(User);
  const registeredUser = await userRepo.find({ where: { email } });
  // 가입된 유저인지 확인 //
  if (!registeredUser[0]) {
    throw new BaseError(
      "Not_Found",
      StatusCode.Not_Found,
      "해당 유저는 존재하지 않습니다"
    );
  }
  req.body.registeredUser = registeredUser[0];

  // const hashing = Container.get(Hashing);
  // const verifyPassword = wrapTryCatch(
  //   hashing.comparePassword(password, registeredUser[0].password)
  // );
  // // 비밀번호 일치 확인 //
  // if (!verifyPassword)
  //   throw new BaseError(
  //     "Bad_Request",
  //     StatusCode.Bad_Request,
  //     "비밀번호를 확인해주세요"
  //   );

  next();
};

export const passwordVaildation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    throw new BaseError("Conflict", StatusCode.Conflict, error.message);
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
