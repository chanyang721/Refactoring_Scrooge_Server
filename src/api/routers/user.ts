import { Router } from "express";
import Container from "typedi";
import { Auth } from "../../helper/middlewares/auth"
import { createVaildation, loginVaildation } from "../../helper/middlewares/vaildations/userVaildation"
import { createUser, login } from "../controllers/userControllers";


const isUser = Container.get(Auth).isAuthorized
const userRouters = Router();

export default (router: Router) => {
    router.use("/user", userRouters)

    userRouters.post("/signup", createVaildation, createUser)

    userRouters.post("/login", loginVaildation, login)
    
    userRouters.get("/find/:password", isUser)

    userRouters.put("/change/password", isUser)
    
    userRouters.put("/info", isUser)
    
    userRouters.get("/check/:email", )

    userRouters.get("/refresh", isUser)

    userRouters.delete("/", isUser)

    userRouters.get("/initialize", isUser)

    userRouters.get("/signout", isUser)

}