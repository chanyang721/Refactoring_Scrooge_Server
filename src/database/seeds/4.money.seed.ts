import {Factory, Seeder} from "typeorm-seeding";
import {Connection, getRepository} from "typeorm";
import {Money} from "../entity/money";

export default class CreateMoney implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const MoneyData = [
            {
                ////////////////// user 1 Start /////////////////
                cost: 50000,
                memo: "길가다 주운 돈",
                userId: 1,
                categoryId: 1,
            },
            {
                cost: 100000,
                memo: "아빠 용돈",
                userId: 1,
                categoryId: 1,
            },
            {
                cost: 79000,
                memo: "빠스타 with 여친",
                userId: 1,
                categoryId: 2,
            },
            {
                cost: 4800,
                memo: "편의점 커피",
                userId: 1,
                categoryId: 2,
            },
            {
                cost: 150000,
                memo: "빌어먹을 핸드폰 약정",
                userId: 1,
                categoryId: 3,
            },
            {
                cost: 20000,
                memo: "태블릿 데이터 비용",
                userId: 1,
                categoryId: 3,
            },
            {
                cost: 15000,
                memo: "버스비",
                userId: 1,
                categoryId: 4,
            },
            {
                cost: 60000,
                memo: "택시비",
                userId: 1,
                categoryId: 4,
            },
            {
                cost: 200000,
                memo: "월세",
                userId: 1,
                categoryId: 5,
            },
            {
                cost: 9500,
                memo: "유튜브 프리미엄",
                userId: 1,
                categoryId: 5,
            },
            {
                cost: 165000,
                memo: "토익학원 접수",
                userId: 1,
                categoryId: 6,
            },
            {
                cost: 168000,
                memo: "제빵 학원",
                userId: 1,
                categoryId: 6,
            },
            {
                cost: 48000,
                memo: "쿠우쿠우 먹방",
                userId: 1,
                categoryId: 7,
            },
            {
                cost: 91200,
                memo: "스떼이크를 썰어봤습니다",
                userId: 1,
                categoryId: 7,
            },
            {
                cost: 165000,
                memo: "미슐랭 한식집 탐방!!!",
                userId: 1,
                categoryId: 7,
            },
            {
                cost: 36900,
                memo: "요번달 하이패스비 !",
                userId: 1,
                categoryId: 8,
            },
            {
                cost: 119000,
                memo: "캣츠가 왜 유명한지 알겠더라구요",
                userId: 1,
                categoryId: 9,
            },
            {
                cost: 4500000,
                memo: "가죽 쪼가리가 왜 가격이 왜이래 !",
                userId: 1,
                categoryId: 9,
            },
            {
                cost: 100000,
                memo: "친구 결혼",
                userId: 1,
                categoryId: 10,
            },
            {
                cost: 100000,
                memo: "민규 생일",
                userId: 1,
                categoryId: 10,
                ////////////////// user 1 End ///////////////////
            },
            {
                ////////////////// user 2 Start /////////////////
                cost: 230000,
                memo: "지갑 잃어버렸다..",
                userId: 2,
                categoryId: 11,
            },
            {
                cost: 1000000,
                memo: "부모님 용돈",
                userId: 2,
                categoryId: 11,
            },
            {
                cost: 58000,
                memo: "소고기",
                userId: 2,
                categoryId: 12,
            },
            {
                cost: 22000,
                memo: "아이스크림",
                userId: 5,
                categoryId: 12,
            },
            {
                cost: 700000,
                memo: "제주도",
                userId: 2,
                categoryId: 13,
            },
            {
                cost: 20000,
                memo: "친구약속",
                userId: 2,
                categoryId: 13,
            },
            {
                cost: 50000,
                memo: "민규 생일",
                userId: 2,
                categoryId: 14,
            },
            {
                cost: 10000,
                memo: "친구 결혼",
                userId: 2,
                categoryId: 14,
            },
            {
                cost: 234120,
                memo: "세금 1",
                userId: 5,
                categoryId: 15,
            },
            {
                cost: 157210,
                memo: "세금 2",
                userId: 2,
                categoryId: 15,
            },
            {
                cost: 500000,
                memo: "초코 건강검진",
                userId: 2,
                categoryId: 16,
            },
            {
                cost: 12000,
                memo: "초코 간식",
                userId: 2,
                categoryId: 16,
            },
            {
                cost: 70590,
                memo: "삼성",
                userId: 2,
                categoryId: 17,
            },
            {
                cost: 40380,
                memo: "메리츠",
                userId: 2,
                categoryId: 17,
            },
            {
                cost: 1000000,
                memo: "실리콘밸리",
                userId: 2,
                categoryId: 18,
            },
            {
                cost: 300000,
                memo: "렌트값",
                userId: 2,
                categoryId: 18,
            },
            {
                cost: 18590,
                memo: "컴퓨터활용능력 1급",
                userId: 2,
                categoryId: 19,
            },
            {
                cost: 25670,
                memo: "정보처리기사",
                userId: 2,
                categoryId: 19,
            },
            {
                cost: 55000,
                memo: "모두의마블",
                userId: 5,
                categoryId: 20,
            },
            {
                cost: 220000,
                memo: "모두의마블",
                userId: 2,
                categoryId: 20,
                ////////////////// user 2 End ///////////////////
            },
            {
                ////////////////// user 3 Start /////////////////
                cost: 10000,
                memo: "찢어진 돈",
                userId: 3,
                categoryId: 21,
            },
            {
                cost: 10000,
                memo: "부모님 용돈",
                userId: 3,
                categoryId: 21,
            },
            {
                cost: 25000,
                memo: "햄버거",
                userId: 3,
                categoryId: 22,
            },
            {
                cost: 22000,
                memo: "아이스크림",
                userId: 3,
                categoryId: 22,
            },
            {
                cost: 40000,
                memo: "태블릿",
                userId: 3,
                categoryId: 23,
            },
            {
                cost: 36000,
                memo: "아이폰",
                userId: 3,
                categoryId: 23,
            },
            {
                cost: 28900,
                memo: "택시비",
                userId: 3,
                categoryId: 24,
            },
            {
                cost: 5800,
                memo: "버스비",
                userId: 3,
                categoryId: 24,
            },
            {
                cost: 240000,
                memo: "엑셀학원",
                userId: 3,
                categoryId: 25,
            },
            {
                cost: 200000,
                memo: "요리학원",
                userId: 3,
                categoryId: 25,
            },
            {
                cost: 51800,
                memo: "애슐리 퀸즈",
                userId: 3,
                categoryId: 26,
            },
            {
                cost: 12000,
                memo: "본죽",
                userId: 3,
                categoryId: 26,
            },
            {
                cost: 1500,
                memo: "천안 -> 서울",
                userId: 3,
                categoryId: 27,
            },
            {
                cost: 1500,
                memo: "천안 -> 경주",
                userId: 3,
                categoryId: 27,
            },
            {
                cost: 300000,
                memo: "삼성",
                userId: 3,
                categoryId: 28,
            },
            {
                cost: 230000,
                memo: "국민",
                userId: 3,
                categoryId: 28,
            },
            {
                cost: 900000,
                memo: "제주 항공",
                userId: 3,
                categoryId: 29,
            },
            {
                cost: 50000,
                memo: "제주 렌트비",
                userId: 3,
                categoryId: 29,
            },
            {
                cost: 23000,
                memo: "관리비 1",
                userId: 3,
                categoryId: 30,
            },
            {
                cost: 20845,
                memo: "관리비 2",
                userId: 3,
                categoryId: 30,
                ////////////////// user 3 End ///////////////////
            },
            {
                ////////////////// user 4 Start /////////////////
                cost: 50000,
                memo: "길가다 준 돈",
                userId: 4,
                categoryId: 31,
            },
            {
                cost: 100000,
                memo: "큰아빠 용돈",
                userId: 4,
                categoryId: 31,
            },
            {
                cost: 79000,
                memo: "빠스타 with 여친",
                userId: 4,
                categoryId: 32,
            },
            {
                cost: 4800,
                memo: "편의점 커피",
                userId: 4,
                categoryId: 32,
            },
            {
                cost: 150000,
                memo: "빌어먹을 핸드폰 약정",
                userId: 4,
                categoryId: 33,
            },
            {
                cost: 20000,
                memo: "태블릿 데이터 비용",
                userId: 4,
                categoryId: 33,
            },
            {
                cost: 15000,
                memo: "버스비",
                userId: 4,
                categoryId: 34,
            },
            {
                cost: 60000,
                memo: "택시비",
                userId: 4,
                categoryId: 34,
            },
            {
                cost: 40000,
                memo: "조카 유치원 픽업",
                userId: 4,
                categoryId: 35,
            },
            {
                cost: 9500,
                memo: "유튜브 프리미엄",
                userId: 4,
                categoryId: 35,
            },
            {
                cost: 165000,
                memo: "토익학원 접수",
                userId: 4,
                categoryId: 36,
            },
            {
                cost: 168000,
                memo: "제빵 학원",
                userId: 4,
                categoryId: 36,
            },
            {
                cost: 48000,
                memo: "쿠우쿠우 먹방",
                userId: 4,
                categoryId: 37,
            },
            {
                cost: 91200,
                memo: "스떼이크를 썰어봤습니다",
                userId: 4,
                categoryId: 37,
            },
            {
                cost: 165000,
                memo: "미슐랭 한식집 탐방!!!",
                userId: 4,
                categoryId: 37,
            },
            {
                cost: 36900,
                memo: "요번달 하이패스비 !",
                userId: 4,
                categoryId: 38,
            },
            {
                cost: 119000,
                memo: "캣츠가 왜 유명한지 알겠더라구요",
                userId: 4,
                categoryId: 39,
            },
            {
                cost: 4500000,
                memo: "가죽 쪼가리가 왜 가격이 왜이래 !",
                userId: 4,
                categoryId: 39,
            },
            {
                cost: 50000,
                memo: "친구 결혼",
                userId: 4,
                categoryId: 40,
            },
            {
                cost: 100000,
                memo: "민규 생일",
                userId: 4,
                categoryId: 40,
            },
            {
                cost: 760000,
                memo: "지갑 잃어버렸다..",
                userId: 4,
                categoryId: 41,
            },
            {
                cost: 100000,
                memo: "조카 용돈",
                userId: 4,
                categoryId: 41,
                ////////////////// user 4 End ///////////////////
            },
            {
                ////////////////// user 5 Start /////////////////
                cost: 5000,
                memo: "길가다 흘린 돈",
                userId: 5,
                categoryId: 42,
            },
            {
                cost: 20000,
                memo: "세탁기 돌린 돈",
                userId: 5,
                categoryId: 42,
            },
            {
                cost: 35000,
                memo: "복숭아",
                userId: 5,
                categoryId: 43,
            },
            {
                cost: 4500,
                memo: "메가커피 카페모카",
                userId: 5,
                categoryId: 43,
            },
            {
                cost: 15000,
                memo: "빌어먹을 핸드폰 약정",
                userId: 5,
                categoryId: 44,
            },
            {
                cost: 8270,
                memo: "인터넷",
                userId: 5,
                categoryId: 44,
            },
            {
                cost: 12500,
                memo: "버스비",
                userId: 5,
                categoryId: 45,
            },
            {
                cost: 62000,
                memo: "기름값",
                userId: 5,
                categoryId: 45,
            },
            {
                cost: 120000,
                memo: "유치원",
                userId: 5,
                categoryId: 46,
            },
            {
                cost: 52580,
                memo: "기저귀",
                userId: 5,
                categoryId: 46,
            },
            {
                cost: 250000,
                memo: "토익학원",
                userId: 5,
                categoryId: 47,
            },
            {
                cost: 200000,
                memo: "컴퓨터학원",
                userId: 5,
                categoryId: 47,
            },
            {
                cost: 135000,
                memo: "한우",
                userId: 5,
                categoryId: 48,
            },
            {
                cost: 28000,
                memo: "회전초밥",
                userId: 5,
                categoryId: 48,
            },
            {
                cost: 179900,
                memo: "오마카세",
                userId: 5,
                categoryId: 48,
            },
            {
                cost: 36900,
                memo: "요번달 하이패스비 !",
                userId: 5,
                categoryId: 49,
            },
            {
                cost: 119000,
                memo: "기업",
                userId: 5,
                categoryId: 50,
            },
            {
                cost: 500000,
                memo: "카카오",
                userId: 5,
                categoryId: 50,
            },
            {
                cost: 1000000,
                memo: "보라카이",
                userId: 5,
                categoryId: 51,
            },
            {
                cost: 600000,
                memo: "비행기",
                userId: 5,
                categoryId: 51,
            },
            {
                cost: 45270,
                memo: "관리비",
                userId: 5,
                categoryId: 52,
                ////////////////// user 5 End ///////////////////
            },
        ];
        const getRepo = getRepository(Money);

        await getRepo.query("SET foreign_key_checks = 0");
        await getRepo.clear();
        await getRepo.save(MoneyData);
        await getRepo.query("SET foreign_key_checks = 1");
    }
}
