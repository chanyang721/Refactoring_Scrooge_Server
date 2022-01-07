import { Router } from "express";
import { isAuth } from "../../helper/middlewares/auth";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const moneyRouters = Router();

export default (router: Router) => {
  router.use("/money", isAuth, moneyRouters);

  moneyRouters.get("/page");

  moneyRouters.post("/spend");

  moneyRouters.put("/spend");

  moneyRouters.delete("/spend");
};
