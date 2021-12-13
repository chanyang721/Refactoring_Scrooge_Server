import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { Service } from "typedi";

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
        return compare || false;
    };
}
