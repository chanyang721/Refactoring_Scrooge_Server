import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { Api409Error } from "../../utils/error/baseError";

export const InputVaildations = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  // input값 body, params, query값을 가져온다.
  // 값이 존재하는 것, 그리고 해당 domain의 entity를 가져온다.
  // Joi 스키마를 만들어 놓은 객체를 가져온다.

  const schema = Joi.object({
    email: Joi.string().email().trim().max(30).required(),
  });

  const { value, error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    throw new Api409Error(error.message);
  }

  req.body = value;
  const { email } = req.body;

  next();
};
