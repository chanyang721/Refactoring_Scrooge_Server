import { Router } from "express";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const monthRouters = Router();

export default (router: Router) => {
    router.use("/month", monthRouters)

    monthRouters.get("/data", )
    
}