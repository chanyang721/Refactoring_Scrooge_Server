import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { User } from "../database/entity/user";
import { BaseRepository } from "../database/baseRepository";
import { BaseError } from "../helper/utils/error/baseError";
import { StatusCode } from "src/helper/utils/error/httpStatusCodes";

@Service()
@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
  public async fetchRow(entity, id: string) {
    try {
      const rowInfo = await this.repository
        .createQueryBuilder()
        .where("id = :id", { id })
        .getOne();

      return { rowInfo };
    } catch (error) {
      console.error(error);
      throw new BaseError("Bad_Request", StatusCode.Bad_Request, error.message);
    }
  }

  public async fetchRowByEmail(entity, email: string) {
    try {
      const rowInfo = await this.repository
        .createQueryBuilder()
        .where("email = :email", { email })
        .getOne();

      return { rowInfo };
    } catch (error) {
      console.error(error);
      throw new BaseError("Bad_Request", StatusCode.Bad_Request, error.message);
    }
  }

  public async insertRow(entity, data: User) {
    try {
      const newRow = await this.repository
        .createQueryBuilder()
        .insert()
        .into(entity)
        .values(data)
        .execute();

      return { newRow };
    } catch (error) {
      console.error(error);
      throw new BaseError("Bad_Request", StatusCode.Bad_Request, error.message);
    }
  }

  public async deleteById(entity, data: User) {
    try {
      const { affected } = await this.repository
        .createQueryBuilder()
        .softDelete()
        .where("id = :id", { id: data.id })
        .execute();

      return { affected };
    } catch (error) {
      console.error(error);
      throw new BaseError("Bad_Request", StatusCode.Bad_Request, error.message);
    }
  }

  public async updateRow(entity, data: User) {
    try {
      const { affected } = await this.repository
        .createQueryBuilder()
        .update(entity)
        .set(data)
        .where("id = :id", { id: data.id })
        .execute();

      return { affected };
    } catch (error) {
      console.error(error);
      throw new BaseError("Bad_Request", StatusCode.Bad_Request, error.message);
    }
  }

  public async restoreRow(entity, id: string) {
    try {
      const { affected } = await this.repository
        .createQueryBuilder()
        .where("id = :id", { id })
        .restore()
        .execute();

      return { affected };
    } catch (error) {
      console.error(error);
      throw new BaseError("Bad_Request", StatusCode.Bad_Request, error.message);
    }
  }
}
