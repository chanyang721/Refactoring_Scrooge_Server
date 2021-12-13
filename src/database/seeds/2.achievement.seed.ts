import { Factory, Seeder } from "typeorm-seeding";
import { Connection, getRepository } from "typeorm";
import { Achievement } from "../entity/achievement";

export default class CreateAchievement implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const achievementData = [
            {
                scrooge: 0,
                leastspend: 0,
                userId: 1,
            },
            {
                scrooge: 0,
                leastspend: 0,
                userId: 2,
            },
            {
                scrooge: 0,
                leastspend: 0,
                userId: 3,
            },
            {
                scrooge: 0,
                leastspend: 0,
                userId: 4,
            },
            {
                scrooge: 0,
                leastspend: 0,
                userId: 5,
            },
        ];
        const getRepo = getRepository(Achievement);

        await getRepo.query("SET foreign_key_checks = 0");
        await getRepo.clear();
        await getRepo.save(achievementData);
        await getRepo.query("SET foreign_key_checks = 1");
    }
}
