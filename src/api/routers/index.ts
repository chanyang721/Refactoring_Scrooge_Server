import { Router } from "express";
import userRouters from "./user";
import categoryRouters from "./category";
import settingRouters from "./settings";
import moneyRouters from "./money";
import oauthRouters from "./oauth";

export default () => {
  const router = Router();

  userRouters(router);
  oauthRouters(router);
  categoryRouters(router);
  settingRouters(router);
  moneyRouters(router);

  return router;
};
