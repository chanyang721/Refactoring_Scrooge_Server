import { Router } from "express";
import Container from "typedi";
import { Auth } from "../../middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const isUser = Container.get(Auth).isAuthorized
const dayRouters = Router();

export default (router: Router) => {
    router.use("/day", isUser, dayRouters)

    dayRouters.post("/spend", )

    dayRouters.delete("/spend", )

    dayRouters.put("/spend", )

    dayRouters.get("/page", )

}