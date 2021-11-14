import { Service } from "typedi";
import { User } from "../database/entity/user";
import { BaseRepository } from "../database/baseRepository"
import Jwt from "../helper/utils/jwt";
import { UserDTO } from "../interface/user";
import { getRepository } from "typeorm";

@Service()
export class UserService extends BaseRepository<User> {
    private jwt: Jwt;

    constructor() {
        super(User)
        this.jwt = new Jwt()
    }
    
    public async insertUser(data: UserDTO) {
        console.log(data)
        const user = await this.repository
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(data)
            .execute();

        return { user };
    }
} 