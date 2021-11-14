import { Router } from "express";
import Container from "typedi";
import { Auth } from "../../helper/middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"
const isUser = Container.get(Auth).isAuthorized

const categoryRouters = Router();

export default (router: Router) => {
    router.use("/category", isUser, categoryRouters)

    categoryRouters.post("/", )

    categoryRouters.put("/", )

    categoryRouters.delete("/", )

    categoryRouters.post("/sort", )

    categoryRouters.get("/budget", )

}