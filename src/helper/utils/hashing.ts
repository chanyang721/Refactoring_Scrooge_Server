import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { Service } from "typedi";
import { Api400Error } from "./error/baseError";

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
    if (!compare) throw new Api400Error("비밀번호가 틀렸습니다");

    return compare;
  };
}
