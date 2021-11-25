import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { User } from "../entity/user"

export default class CreateUsers implements Seeder {

	public async run(factory: Factory, connection: Connection): Promise<any> {
		const userData = [
			{
				
			}, {

			}
		];
		await connection.getRepository(User).save(userData);
	}
}
