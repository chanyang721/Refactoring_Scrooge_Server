import { Router } from "express";
import { isAuth } from "../../helper/middlewares/auth";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const settingRouters = Router();

export default (router: Router) => {
  router.use("/setting", isAuth, settingRouters);

  settingRouters.put("/option");

  settingRouters.get("/excel");

  settingRouters.delete("/all");
};
