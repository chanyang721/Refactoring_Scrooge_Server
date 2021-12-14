import { Factory, Seeder } from "typeorm-seeding";
import { Connection, getRepository } from "typeorm";
import { Level } from "../entity/level";

export default class CreateCategory implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const levelData = [
      {
        level: 1,
        theme: false,
        explore: false,
        dataexplore: false,
        userId: 1,
      },
    ];
    const getRepo = getRepository(Level);

    await getRepo.query("SET foreign_key_checks = 0");
    await getRepo.clear();
    await getRepo.save(levelData);
    await getRepo.query("SET foreign_key_checks = 1");
  }
}
