import Container, { Service } from "typedi";
import { User } from "../database/entity/user";
import { BaseRepository } from "../database/baseRepository"
import Jwt from "../helper/utils/jwt";
import Hashing from "../helper/utils/hashing"
import { UserDTO } from "./interface/user";
import { UserRepository } from "../repository/userRepository"

@Service()
export class UserService extends BaseRepository<User> {

    constructor(
        private jwt: Jwt, 
        private hash: Hashing,
        private repo: UserRepository
    ) {
        super(User)
    }

    public async insertUser(data: UserDTO) {  
        data.password = await this.hash.hashingPassword(data.password);

        const newUser = await this.repo.insertRow(User, data)

        return { newUser };
    }

    public async login (data: UserDTO) {
        const accessToken = this.jwt.genAccessToken("ACCESS_TOKEN", "10h");
        const refreshToken = this.jwt.genAccessToken("REFRESH_TOKEN", "90d");

        return { 
            accessToken: accessToken({ id: data.id }), 
            refreshToken: refreshToken({ id: data.id })
        };
    }

    public async softDeleteUser (data: UserDTO) {
        const { affected } = await this.repo.deleteById(User, data)
        return { affected };
    }

    public async updateUserInfo (data: UserDTO) {
        const { affected } = await this.repo.updateRow(User, data)
        return { affected };
    }
    
    public async restoreUser(id: string) {
        const { affected } = await this.repo.restoreRow(User, id)
        return { affected }
    }

}