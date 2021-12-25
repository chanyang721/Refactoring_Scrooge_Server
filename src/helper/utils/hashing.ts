import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { Service } from "typedi";
import { BaseError } from "./error/baseError";
import { StatusCode } from "./error/httpStatusCodes";

@Service()
export default class Hashing {
  public hashingPassword = async (password: string) => {
    const salt = genSaltSync(11, "a");
    const hashedPassword = hashSync(password, salt);

    return hashedPassword;
  };

  public comparePassword = (
    password: string,
    hashedPassword: string
  ): boolean => {
    const compare = compareSync(password, hashedPassword);
    if (!compare)
      throw new BaseError(
        "Bad_Request",
        StatusCode.Bad_Request,
        "비밀번호가 틀렸습니다"
      );

    return compare;
  };
}
