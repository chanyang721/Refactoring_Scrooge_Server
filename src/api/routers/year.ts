import { Router } from "express";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const yearRouters = Router();

export default (router: Router) => {
    router.use("/year", yearRouters)

    yearRouters.get("/data", )
    
}