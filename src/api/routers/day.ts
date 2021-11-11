import { Router } from "express";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const dayRouters = Router();

export default (router: Router) => {
    router.use("/day", dayRouters)

    dayRouters.post("/spend", )

    dayRouters.delete("/spend", )

    dayRouters.put("/spend", )

    dayRouters.get("/page", )

}