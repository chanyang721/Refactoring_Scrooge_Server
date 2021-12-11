import {Router} from "express";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const oauthRouters = Router();

export default (router: Router) => {
    router.use("/oauth", oauthRouters);

    oauthRouters.post("/signup");

    oauthRouters.post("/google/login");

    oauthRouters.get("/google/check/:email");

    oauthRouters.post("/kakao/login");

    oauthRouters.get("/kakao/check/:email");
};
