import { Router } from "express";
import Container from "typedi";
import { isAuthorized } from "../../helper/middlewares/auth"
import { createVaildation, loginVaildation } from "../../helper/middlewares/vaildations/userVaildation"
import { createUser, login, softDeleteUser, updateUserInfo, restoreUser } from "../controllers/userControllers";


const userRouters = Router();

export default (router: Router) => {
    router.use("/user", userRouters)

    userRouters.post("/signup", createVaildation, createUser)

    userRouters.post("/login", loginVaildation, login)
    
    userRouters.get("/find/:password", isAuthorized, )

    userRouters.put("/change/password", isAuthorized, )
    
    userRouters.put("/Info", isAuthorized, updateUserInfo)
    
    userRouters.get("/check/:email", )

    userRouters.get("/refresh", isAuthorized, )

    userRouters.delete("/", isAuthorized, softDeleteUser)

    userRouters.put("/restore/:id", restoreUser)

    userRouters.get("/initialize", isAuthorized, )

    userRouters.get("/signout", isAuthorized, )

}