import {Service} from "typedi";
import AWS from "aws-sdk";
import {User} from "../database/entity/user";
import Jwt from "../helper/utils/jwt";
import Hashing from "../helper/utils/hashing";
import {UserDTO} from "./interface/user";
import {UserRepository} from "../repository/userRepository";
import {ErrorFormat} from "src/helper/utils/errorformat";

@Service()
export class UserService {
    constructor(
        private jwt: Jwt,
        private hash: Hashing,
        private repo: UserRepository
    ) {}

    public async insertUser(data: UserDTO) {
        data.password = await this.hash.hashingPassword(data.password);
        const newUser = await this.repo.insertRow(User, data);
        return {newUser};
    }

    public async login(data: UserDTO) {
        const accessToken = this.jwt.genToken("ACCESS_TOKEN", "10h");
        const refreshToken = this.jwt.genToken("REFRESH_TOKEN", "90d");

        return {
            accessToken: accessToken({id: data.id}),
            refreshToken: refreshToken({id: data.id}),
        };
    }

    public async getUserInfoById(id: string) {
        const {rowInfo} = await this.repo.fetchRow(User, id);
        return rowInfo;
    }

    public async softDeleteUser(data: UserDTO) {
        const {affected} = await this.repo.deleteById(User, data);
        return {affected};
    }

    public async updateUserInfo(data: UserDTO) {
        const {affected} = await this.repo.updateRow(User, data);
        return {affected};
    }

    public async restoreUser(id: string) {
        const {affected} = await this.repo.restoreRow(User, id);
        return {affected};
    }

    public async resetPassword(email: string) {
        const SES = new AWS.SES({
            region: "ap-northeast-2",
            apiVersion: "2010-12-01",
            maxRetries: 2,
        });

        const newPassword = String(
            Math.floor(Math.random() * (100000 - 999999 + 1))
        );

        const title = `Scrooge 임시 비밀번호 입니다.`;
        const body = `
            <p>
                <span>
                    고객님의 임시 비밀번호는 ${newPassword} 입니다.
                </span>
            </p>
        `;

        const messageInfo = {
            Destination: {ToAddresses: [email]},
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: `<div>${body}</div>`,
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: `[ Team Scrooge ] ${title}`,
                },
            },
            Source: "Scrooge@gmail.com",
        };

        const response = await SES.sendEmail(messageInfo).promise();
        return {response, newPassword};
    }

    public async comparePassword(password: string, hashedPassword: string) {
        const compareResult = this.hash.comparePassword(
            password,
            hashedPassword
        );
        if (!compareResult) throw new ErrorFormat(400, "비밀번호가 틀렸습니다");

        return compareResult;
    }

    public async hashPassword(password: string) {
        const hashed = await this.hash.hashingPassword(password);
        return String(hashed);
    }

    public async checkEmail(email: string) {
        const {rowInfo} = await this.repo.fetchRowByEmail(User, email);
        return rowInfo;
    }
}
