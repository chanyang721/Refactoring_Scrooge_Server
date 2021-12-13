import { Factory, Seeder } from "typeorm-seeding";
import { Connection, getRepository } from "typeorm";
import { User } from "../entity/user";

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const userData = [
            {
                name: "yonghui",
                email: "1@gmail.com",
                password: "123456",
                photo: "/upload/ecca8bef873c9965e91f57fa103abbae",
                darkmode: false,
                redirect: "/daily",
                birthday: "1234-12-34",
                experience: 0,
            },
            {
                name: "chanyang",
                email: "chanyang721@gmail.com",
                password: "123456",
                photo: "/upload/ecca8bef873c9965e91f57fa103abbae",
                darkmode: false,
                redirect: "/daily",
                birthday: "1234-12-34",
                experience: 0,
            },
            {
                name: "solheee",
                email: "solheee@gmail.com",
                password: "123456",
                photo: "/upload/ecca8bef873c9965e91f57fa103abbae",
                darkmode: false,
                redirect: "/daily",
                birthday: "1234-12-34",
                experience: 0,
            },
            {
                name: "pmg7522",
                email: "pmg7522@gmail.com",
                password: "123456",
                photo: "/upload/ecca8bef873c9965e91f57fa103abbae",
                darkmode: false,
                redirect: "/daily",
                birthday: "1234-12-34",
                experience: 0,
            },
            {
                name: "scrooge",
                email: "scrooge@gmail.com",
                password: "123456",
                photo: "/upload/ecca8bef873c9965e91f57fa103abbae",
                darkmode: false,
                redirect: "/daily",
                birthday: "1234-12-34",
                experience: 0,
            },
        ];
        const getRepo = getRepository(User);

        await getRepo.query("SET foreign_key_checks = 0");
        await getRepo.clear();
        await getRepo.save(userData);
        await getRepo.query("SET foreign_key_checks = 1");
    }
}
