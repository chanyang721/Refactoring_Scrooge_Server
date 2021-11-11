import { Router } from "express";
import Container from "typedi";
import { Auth } from "../../middlewares/auth"
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const isUser = Container.get(Auth).isAuthorized
const userRouters = Router();

export default (router: Router) => {
    router.use("/user", userRouters)

    userRouters.post("/signup", )

    userRouters.post("/login", )
    
    userRouters.post("/findpassword", isUser)

    userRouters.put("/changepassword", isUser)
    
    userRouters.put("/info", isUser)
    
    userRouters.post("/checkemail", )

    userRouters.get("/refresh", isUser)

    userRouters.delete("/", isUser)

    userRouters.get("/initialize", isUser)

    userRouters.get("/signout", isUser)

}