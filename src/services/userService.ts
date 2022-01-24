import AWS from "aws-sdk";
import { Service } from "typedi";
import Jwt from "../helper/utils/jwt";
import { User } from "../database/entity/user";
import Hashing from "../helper/utils/hashing";
import { UserRepository } from "../repository/userRepository";
import config from "../config";

@Service()
export default class UserService {
  constructor(
    private readonly jwt: Jwt,
    private readonly hash: Hashing,
    private readonly userRepository: UserRepository
  ) {}

  public async insertUser(data: User) {
    data.password = await this.hash.hashingPassword(data.password!);
    const { generatedMaps } = await this.userRepository.insertRow(User, data);
    return { newUser: generatedMaps[0] };
  }

  public async getToken(tokenOptions: User) {
    const { id, agency_key } = tokenOptions;
    const accessToken = this.jwt.genToken("ACCESS_TOKEN", "10h");
    const refreshToken = this.jwt.genToken("REFRESH_TOKEN", "90d");

    return {
      accessToken: accessToken({ id, agency_key }),
      refreshToken: refreshToken({ id, agency_key }),
    };
  }

  public async getUserInfoById(id: string) {
    const { rowInfo } = await this.userRepository.fetchRow(User, id);
    delete rowInfo.password;
    return rowInfo;
  }

  public async softDeleteUser(data: User) {
    const { affected } = await this.userRepository.softDeleteById(User, data);
    return { affected };
  }

  public async updateUserInfo(data: User) {
    const { affected } = await this.userRepository.updateRow(User, data);
    return { affected };
  }

  public async restoreUser(id: string) {
    const { affected } = await this.userRepository.restoreRow(User, id);
    return { affected };
  }

  public async resetPassword(email: string) {
    const SES = new AWS.SES(config.AWS_SES);

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
      Destination: { ToAddresses: [email] },
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
    return { response, newPassword };
  }

  public async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const compareResult = this.hash.comparePassword({
      password,
      hashedPassword,
    });

    return compareResult;
  }

  public async hashPassword(password: string): Promise<string> {
    const hashed = await this.hash.hashingPassword(password);
    return String(hashed);
  }

  public async checkEmail(email: string) {
    const { rowInfo } = await this.userRepository.fetchRowByEmail(User, email);
    return rowInfo;
  }
}
