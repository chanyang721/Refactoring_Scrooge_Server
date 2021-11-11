import { Router } from "express";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const settingRouters = Router();

export default (router: Router) => {
    router.use("/setting", settingRouters)

    settingRouters.put("/mainpage", )

    settingRouters.put("/darkmode", )

    settingRouters.get("/importexcel", )

    settingRouters.delete("/data", )

}