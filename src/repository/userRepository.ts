import { Service } from "typedi";
import { User } from "../database/entity/user";
import { BaseRepository } from "../database/baseRepository";
import { EntityTarget, Entity } from "typeorm";

@Service()
export class UserRepository extends BaseRepository<User> {
  private constructor() {
    super(User);
  }

  public async fetchRow(entity: EntityTarget<unknown>, id: string) {
    const rowInfo = await this.repository
      .createQueryBuilder()
      .where("id = :id", { id })
      .getOne();

    return { rowInfo };
  }

  public async fetchRowByEmail(entity: EntityTarget<unknown>, email: string) {
    const rowInfo = await this.repository
      .createQueryBuilder()
      .where("email = :email", { email })
      .getOne();

    return { rowInfo };
  }

  public async insertRow(entity: EntityTarget<unknown>, data: User) {
    const newRow = await this.repository
      .createQueryBuilder()
      .insert()
      .into(entity)
      .values([data])
      .execute();

    return { newRow };
  }

  public async deleteById(entity: EntityTarget<unknown>, data: User) {
    const { affected } = await this.repository
      .createQueryBuilder()
      .softDelete()
      .where("id = :id", { id: data.id })
      .execute();

    return { affected };
  }

  public async updateRow(entity: EntityTarget<unknown>, data: User) {
    const { affected } = await this.repository
      .createQueryBuilder()
      .update(entity)
      .set(data)
      .where("id = :id", { id: data.id })
      .execute();

    return { affected };
  }

  public async restoreRow(entity: EntityTarget<unknown>, id: string) {
    const { affected } = await this.repository
      .createQueryBuilder()
      .where("id = :id", { id })
      .restore()
      .execute();

    return { affected };
  }
}
