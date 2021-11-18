import { Router } from "express";
import Container from "typedi";
import { isAuthorized } from "../../helper/middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"


const categoryRouters = Router();

export default (router: Router) => {
    router.use("/category", isAuthorized, categoryRouters)

    categoryRouters.post("/", )

    categoryRouters.put("/", )

    categoryRouters.delete("/", )

    categoryRouters.post("/sort", )

    categoryRouters.get("/budget", )

}