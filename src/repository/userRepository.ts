import { Service } from "typedi";
import { EntityTarget } from "typeorm";
import { User } from "../database/entity/user";
import { BaseRepository } from "../database/baseRepository";

@Service()
export class UserRepository extends BaseRepository<User> {
  private constructor() {
    super(User);
  }

  public async fetchRow(
    entity: EntityTarget<unknown>,
    id: string
  ): Promise<any> {
    const rowInfo = await this.repository
      .createQueryBuilder()
      .where("id = :id", { id })
      .getOne();

    return { rowInfo };
  }

  public async fetchRowByEmail(
    entity: EntityTarget<unknown>,
    email: string
  ): Promise<any> {
    const rowInfo = await this.repository
      .createQueryBuilder()
      .where("email = :email", { email })
      .getOne();

    return { rowInfo };
  }

  public async insertRow(
    entity: EntityTarget<unknown>,
    data: User
  ): Promise<any> {
    const { generatedMaps } = await this.repository
      .createQueryBuilder()
      .insert()
      .into(entity)
      .values([data])
      .execute();

    return { generatedMaps };
  }

  public async deleteById(
    entity: EntityTarget<unknown>,
    data: User
  ): Promise<{ affected: number }> {
    const { affected } = await this.repository
      .createQueryBuilder()
      .softDelete()
      .where("id = :id", { id: data.id })
      .execute();

    return { affected };
  }

  public async updateRow(
    entity: EntityTarget<unknown>,
    data: User
  ): Promise<{ affected: number }> {
    const { affected } = await this.repository
      .createQueryBuilder()
      .update(entity)
      .set({ ...data })
      .where("id = :id", { id: data.id })
      .execute();

    return { affected };
  }

  public async restoreRow(
    entity: EntityTarget<unknown>,
    id: string
  ): Promise<{ affected: number }> {
    const { affected } = await this.repository
      .createQueryBuilder()
      .where("id = :id", { id })
      .restore()
      .execute();

    return { affected };
  }
}
