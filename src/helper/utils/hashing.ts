import { genSaltSync, hashSync, compareSync } from "bcrypt"
import { Service } from "typedi"

@Service()
export default class Hashing {

    public hashingPassword = async(password: string) => {
        const saltrounds = 10
        const salt = genSaltSync(saltrounds)
        const hashedPassword = hashSync(password, salt)
        
        return hashedPassword
    }

    public comparePassword = async(password: string, hashedPassword: string) => {
        const compare = compareSync(password, hashedPassword)
        return compare;
    }
}