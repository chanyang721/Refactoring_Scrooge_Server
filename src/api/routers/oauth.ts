import { Router } from "express";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const oauthRouters = Router();

export default (router: Router) => {
    router.use("/oauth", oauthRouters)

    oauthRouters.post("/signup", )

    oauthRouters.post("/googlelogin", )

    oauthRouters.post("/googlecheck", )

    oauthRouters.post("/kakaologin", )

    oauthRouters.post("/kakaocheck", )

}