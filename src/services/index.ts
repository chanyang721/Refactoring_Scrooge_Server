import { Service } from "typedi";


@Service()
export default class helloService {
    
    public async getHelloWorld () {
        return "Hello World";
    } 
}