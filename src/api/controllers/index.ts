import { Request, Response, NextFunction } from "express"
import { Container } from "typedi";
import helloService from "../../services";


export const helloController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {  } = req.body

        const helloServiceInstance = Container.get(helloService)
    
        await helloServiceInstance.getHelloWorld();
    
        res.status(200).send({ message: "" })
    }
    catch (error) {

    }
}