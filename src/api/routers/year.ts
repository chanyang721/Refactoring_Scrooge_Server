import { Router } from "express";
import Container from "typedi";
import { Auth } from "../../middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const isUser = Container.get(Auth).isAuthorized

const yearRouters = Router();

export default (router: Router) => {
    router.use("/year", isUser, yearRouters)

    yearRouters.get("/data", )

}