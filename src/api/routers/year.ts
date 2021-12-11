import {Router} from "express";
import Container from "typedi";
import {isAuth} from "../../helper/middlewares/auth";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const yearRouters = Router();

export default (router: Router) => {
    router.use("/year", isAuth, yearRouters);

    yearRouters.get("/data");
};
