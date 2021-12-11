import {Router} from "express";
import userRouters from "./user";
import categoryRouters from "./category";
import settingRouters from "./settings";
import dayRouters from "./day";
import monthRouters from "./month";
import yearRouters from "./year";
import oauthRouters from "./oauth";

export default () => {
    const router = Router();

    userRouters(router);
    oauthRouters(router);
    categoryRouters(router);
    settingRouters(router);
    dayRouters(router);
    monthRouters(router);
    yearRouters(router);

    return router;
};
