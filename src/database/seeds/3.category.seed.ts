import { Factory, Seeder } from "typeorm-seeding";
import { Connection, getRepository } from "typeorm";
import { Category } from "../entity/category";

export default class CreateCategory implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const CategoryData = [
            {
                name: "지정되지 않은 카테고리",
                budget: 10000,
                userId: 1,
                emoji: "grey_question",
            },
            {
                name: "식비",
                budget: 40000,
                userId: 1,
                emoji: "Bento",
            },
            {
                name: "여가비",
                budget: 400000,
                userId: 1,
                emoji: "roller_cosater",
            },
            {
                name: "생활비",
                budget: 500000,
                userId: 1,
                emoji: "see_no_evil",
            },
            {
                name: "고정 지출",
                budget: 260000,
                userId: 1,
                emoji: "moneybag",
            },
            {
                name: "쇼핑",
                budget: 1000000,
                userId: 1,
                emoji: "shopping_bags",
            },
            {
                name: "금융",
                budget: 1000000,
                userId: 1,
                emoji: "whale",
            },
            {
                name: "교통비",
                budget: 50000,
                userId: 1,
                emoji: "minibus",
            },
            {
                name: "문화생활",
                budget: 400000,
                userId: 1,
                emoji: "popcone",
            },
            {
                name: "경조사",
                budget: 100000,
                userId: 1,
                emoji: "champagne",
                ////////////////// user 1 End ///////////////////
            },
            {
                ////////////////// user 2 Start /////////////////
                name: "지정되지 않은 카테고리",
                budget: 0,
                userId: 2,
                emoji: "grey_question",
            },
            {
                name: "식비",
                budget: 500000,
                userId: 2,
                emoji: "sushi",
            },
            {
                name: "여가비",
                budget: 1000000,
                userId: 2,
                emoji: "golf",
            },
            {
                name: "경조사비",
                budget: 100000,
                userId: 2,
                emoji: "Label",
            },
            {
                name: "세금",
                budget: 500000,
                userId: 2,
                emoji: "dollar",
            },
            {
                name: "반려동물비",
                budget: 1000000,
                userId: 2,
                emoji: "feet",
            },
            {
                name: "보험비",
                budget: 240000,
                userId: 2,
                emoji: "slot_machine",
            },
            {
                name: "해외 파견비",
                budget: 1400000,
                userId: 2,
                emoji: "parachute",
            },
            {
                name: "교재비",
                budget: 350000,
                userId: 2,
                emoji: "books",
            },
            {
                name: "모바일 가챠",
                budget: 346000,
                userId: 2,
                emoji: "iphone",
                ////////////////// user 2 End ///////////////////
            },
            {
                ////////////////// user 3 Start /////////////////
                name: "지정되지 않은 카테고리",
                budget: 0,
                userId: 3,
                emoji: "grey_question",
            },
            {
                name: "식비",
                budget: 500000,
                userId: 3,
                emoji: "rice",
            },
            {
                name: "통신비",
                budget: 100000,
                userId: 3,
                emoji: "iphone",
            },
            {
                name: "교통비",
                budget: 55000,
                userId: 3,
                emoji: "bus",
            },
            {
                name: "학원비",
                budget: 900000,
                userId: 3,
                emoji: "school_satchel",
            },
            {
                name: "외식",
                budget: 300000,
                userId: 3,
                emoji: "fork_and_knife",
            },
            {
                name: "하이패스",
                budget: 25900,
                userId: 3,
                emoji: "car",
            },
            {
                name: "카드값",
                budget: 697000,
                userId: 3,
                emoji: "credit_card",
            },
            {
                name: "여행",
                budget: 1250000,
                userId: 3,
                emoji: "airplane",
            },
            {
                name: "관리비",
                budget: 43845,
                userId: 3,
                emoji: "house",
                ////////////////// user 3 End ///////////////////
            },
            {
                ////////////////// user 4 Start /////////////////
                name: "지정되지 않은 카테고리", // 1
                budget: 0,
                userId: 4,
                emoji: "grey_question",
            },
            {
                name: "식비", // 2
                budget: 750000,
                userId: 4,
                emoji: "rice",
            },
            {
                name: "통신비", // 3
                budget: 50000,
                userId: 4,
                emoji: "iphone",
            },
            {
                name: "교통비", // 4
                budget: 45000,
                userId: 4,
                emoji: "bus",
            },
            {
                name: "육아비", // 5
                budget: 500000,
                userId: 4,
                emoji: "baby",
            },
            {
                name: "학원비", // 6
                budget: 1000000,
                userId: 4,
                emoji: "school_satchel",
            },
            {
                name: "외식", // 7
                budget: 400000,
                userId: 4,
                emoji: "fork_and_knife",
            },
            {
                name: "하이패스", // 8
                budget: 50000,
                userId: 4,
                emoji: "car",
            },
            {
                name: "카드값", // 9
                budget: 895000,
                userId: 4,
                emoji: "credit_card",
            },
            {
                name: "여행", // 10
                budget: 1500000,
                userId: 4,
                emoji: "airplane",
            },
            {
                name: "출혈", // 11
                budget: 65000,
                userId: 4,
                emoji: "house",
                ////////////////// user 4 End ///////////////////
            },
            {
                ////////////////// user 5 Start /////////////////
                name: "지정되지 않은 카테고리",
                budget: 0,
                userId: 5,
                emoji: "grey_question",
            },
            {
                name: "식비",
                budget: 750000,
                userId: 5,
                emoji: "rice",
            },
            {
                name: "통신비",
                budget: 36000,
                userId: 5,
                emoji: "iphone",
            },
            {
                name: "교통비",
                budget: 48000,
                userId: 5,
                emoji: "bus",
            },
            {
                name: "육아비",
                budget: 450000,
                userId: 5,
                emoji: "baby",
            },
            {
                name: "학원비",
                budget: 860000,
                userId: 5,
                emoji: "school_satchel",
            },
            {
                name: "외식",
                budget: 350000,
                userId: 5,
                emoji: "fork_and_knife",
            },
            {
                name: "하이패스",
                budget: 25600,
                userId: 5,
                emoji: "car",
            },
            {
                name: "카드값",
                budget: 784000,
                userId: 5,
                emoji: "credit_card",
            },
            {
                name: "여행",
                budget: 1600000,
                userId: 5,
                emoji: "airplane",
            },
            {
                name: "관리비",
                budget: 48000,
                userId: 5,
                emoji: "house",
            },
            ////////////////// user 5 End ///////////////////
        ];
        const getRepo = getRepository(Category);

        await getRepo.query("SET foreign_key_checks = 0");
        await getRepo.clear();
        await getRepo.save(CategoryData);
        await getRepo.query("SET foreign_key_checks = 1");
    }
}
