import { Router } from "express";
import { isAuth } from "../../helper/middlewares/auth";
import { getYearlyData } from "../controllers/yearControllers";
// import { } from "../../middlewares/vaildations"
import { wrapTryCatch } from "../../helper/utils/wrapTryCatch";

const yearRouters = Router();

export default (router: Router) => {
  router.use("/year", isAuth, yearRouters);

  yearRouters.get("/data", wrapTryCatch(getYearlyData));
};
