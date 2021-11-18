import { Router } from "express";
import Container from "typedi";
import { isAuthorized } from "../../helper/middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"


const settingRouters = Router();

export default (router: Router) => {
    router.use("/setting", isAuthorized, settingRouters)

    settingRouters.put("/mainpage", )

    settingRouters.put("/darkmode", )

    settingRouters.get("/importexcel", )

    settingRouters.delete("/data", )

}