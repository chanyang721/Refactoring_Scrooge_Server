import { Router } from "express";
import Container from "typedi";
import { isAuthorized } from "../../helper/middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const dayRouters = Router();

export default (router: Router) => {
    router.use("/day", isAuthorized, dayRouters)

    dayRouters.post("/spend", )

    dayRouters.delete("/spend", )

    dayRouters.put("/spend", )

    dayRouters.get("/page", )

}