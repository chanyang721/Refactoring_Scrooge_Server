import Container, { Service } from "typedi";
import { User } from "../database/entity/user";
import { BaseRepository } from "../database/baseRepository"
import Jwt from "../helper/utils/jwt";
import Hashing from "../helper/utils/hashing"
import { UserDTO } from "./interface/user";

@Service()
export class UserService extends BaseRepository<User> {

    constructor(private jwt: Jwt, private hash: Hashing) {
        super(User)
    }

    public async insertUser(data: UserDTO) {
        const hash: Hashing = Container.get(Hashing)    
        data.password = await hash.hashingPassword(data.password);

        const newUser = await this.repository
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(data)
            .execute();

        return { newUser };
    }

    public async login (data: UserDTO) {
        const jwt: Jwt = Container.get(Jwt);
        const accessToken = jwt.generateAccessToken(data);
        const refreshToken = jwt.generateRefreshToken(data);

        return { accessToken, refreshToken };
    }

    public async softDeleteUser (data: UserDTO) {
        const { id } = data;

        const { affected } = await this.repository
            .createQueryBuilder()
            .softDelete()
            .where("id = :id", { id })
            .execute()

        return { affected };
    }

    public async updateUserInfo (data: UserDTO) {
        const { id } = data;

        const { affected } = await this.repository
            .createQueryBuilder()
            .update(User)
            .set(data)
            .where("id = :id", { id })
            .execute()

        return { affected };
    }
    
    public async restoreUser(id: string) {

        const { affected } = await this.repository
            .createQueryBuilder()
            .where("id = :id", { id })
            .restore()
            .execute()
            
        return { affected }
    }
}