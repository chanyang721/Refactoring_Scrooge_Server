import { BaseRepository } from "src/database/baseRepository";
import { User } from "src/database/entity/user";
import { UserDTO } from "src/services/interface/user";
import { Service } from "typedi";

@Service()
export class UserRepository extends BaseRepository<User> {

    public async insertRow(entity, data: UserDTO) {

        const newRow = await this.repository
            .createQueryBuilder()
            .insert()
            .into(entity)
            .values(data)
            .execute();

        return { newRow }
    }

    public async deleteById(entity, data: UserDTO) {

        const { affected } = await this.repository
            .createQueryBuilder()
            .softDelete()
            .where("id = :id", { id: data.id })
            .execute()

        return { affected }
    }

    public async updateRow(entity, data: UserDTO) {

        const { affected } = await this.repository
            .createQueryBuilder()
            .update(User)
            .set(data)
            .where("id = :id", { id: data.id })
            .execute()

        return { affected }
    }

    public async restoreRow(entity, id: string) {

        const { affected } = await this.repository
            .createQueryBuilder()
            .where("id = :id", { id })
            .restore()
            .execute()

        return { affected }
    }
}