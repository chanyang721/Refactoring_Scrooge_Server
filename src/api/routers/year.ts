import { Router } from "express";
import { isAuth } from "../../helper/middlewares/auth";
import { getYearlyData } from "../controllers/yearControllers";
// import { } from "../../middlewares/vaildations"

const yearRouters = Router();

export default (router: Router) => {
  router.use("/year", yearRouters);

  yearRouters.get("/data", getYearlyData);
};
