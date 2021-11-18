import { createConnection } from "typeorm"
import { Container } from "typedi"
import request from 'supertest';

let connection;
beforeAll(async() => {
    connection = await createConnection()
});

afterAll(async() => {
    await connection.close();
});

describe('user_testing', () => {

    describe("signup_testing" , () => {
        const userSvc = Container.get(userService)
        it('', async() => {
            const testData = {
                "email": "testUser@gmail.com",
                "name": "test",
                "password": "test1234@",
                "birthday": "19920217",
                "phonenumber": "01012341234",
                "sex": 1
            }

            const result = await userSvc.insertUser(testData);
            console.log(result)
        });
    })

    
});