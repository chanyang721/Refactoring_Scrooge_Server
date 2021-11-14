import { Router } from "express";
import Container from "typedi";
import { Auth } from "../../helper/middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const isUser = Container.get(Auth).isAuthorized

const monthRouters = Router();

export default (router: Router) => {
    router.use("/month", isUser, monthRouters)

    monthRouters.get("/data", )
    
}