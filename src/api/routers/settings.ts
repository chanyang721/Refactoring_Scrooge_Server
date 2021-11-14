import { Router } from "express";
import Container from "typedi";
import { Auth } from "../../helper/middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"
const isUser = Container.get(Auth).isAuthorized

const settingRouters = Router();

export default (router: Router) => {
    router.use("/setting", isUser, settingRouters)

    settingRouters.put("/mainpage", )

    settingRouters.put("/darkmode", )

    settingRouters.get("/importexcel", )

    settingRouters.delete("/data", )

}