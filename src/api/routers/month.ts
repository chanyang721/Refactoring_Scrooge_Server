import { Router } from "express";
import Container from "typedi";
import { isAuth } from "../../helper/middlewares/auth";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const monthRouters = Router();

export default (router: Router) => {
    router.use("/month", isAuth, monthRouters);

    monthRouters.get("/data");
};
