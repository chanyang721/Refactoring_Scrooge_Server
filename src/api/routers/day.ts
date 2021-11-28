import { Router } from "express";
import Container from "typedi";
import { isAuth } from "../../helper/middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const dayRouters = Router();

export default (router: Router) => {
    router.use("/day", isAuth, dayRouters)

    dayRouters.post("/spend", )

    dayRouters.delete("/spend/:id", )

    dayRouters.put("/spend", )

    dayRouters.get("/page", )

}