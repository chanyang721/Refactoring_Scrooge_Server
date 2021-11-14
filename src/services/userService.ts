import { Service } from "typedi";
import { User } from "../database/entity/user";
import { BaseRepository } from "../database/baseRepository"
import Jwt from "../helper/utils/jwt";
import { UserDTO } from "../interface/user";

@Service()
export class UserService extends BaseRepository<User> {
    private jwt: Jwt;

    constructor() {
        super(User)
        this.jwt = new Jwt()
    }
    
    public async insertUser(data: UserDTO) {
        const newUser = await this.repository
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(data)
            .execute();

        return { newUser };
    }
} 