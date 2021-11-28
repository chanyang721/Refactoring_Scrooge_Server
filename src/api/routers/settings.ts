import { Router } from "express";
import Container from "typedi";
import { isAuth } from "../../helper/middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"


const settingRouters = Router();

export default (router: Router) => {
    router.use("/setting", isAuth, settingRouters)

    settingRouters.put("/mainpage", )

    settingRouters.put("/darkmode", )

    settingRouters.get("/importexcel", )

    settingRouters.delete("/data", )

}