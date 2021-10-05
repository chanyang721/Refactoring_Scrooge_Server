import { Service } from "typedi";


@Service()
export default class helloService {

    constructor () {}

    public async getHelloWorld () {
        return "Hello World";
    } 
}