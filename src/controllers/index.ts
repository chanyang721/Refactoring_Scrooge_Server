import { Request, Response, NextFunction } from "express"
import { Container } from "typedi";
import helloService from "../services";
// import { } from "../services";
// import { } from "../services";
// import { } from "../services";
// import { } from "../services";


export const helloController = async (req: Request, res: Response, next: NextFunction) => {
    
    const {  } = req.body

    const helloServiceInstance = Container.get(helloService)

    await helloServiceInstance.getHelloWorld();
}