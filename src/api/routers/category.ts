import { Router } from "express";
import { isAuth } from "../../helper/middlewares/auth";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const categoryRouters = Router();

export default (router: Router) => {
  router.use("/category", isAuth, categoryRouters);

  categoryRouters.get("/");

  categoryRouters.post("/");

  categoryRouters.put("/");

  categoryRouters.delete("/");

  categoryRouters.post("/sort");

  categoryRouters.get("/budget");
};
