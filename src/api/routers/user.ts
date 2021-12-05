import { Router } from "express";
import Container from "typedi";
import { isAuth } from "../../helper/middlewares/auth"
import { createVaildation, loginVaildation } from "../../helper/middlewares/vaildations/userVaildation"
import { 
    createUser, 
    login, 
    softDeleteUser, 
    updateUserInfo, 
    restoreUser, 
    refreshToken,
} from "../controllers/userControllers";


const userRouters = Router();

export default (router: Router) => {
    router.use("/user", userRouters)

    userRouters.post("/signup", createVaildation, createUser) //

    userRouters.post("/login", loginVaildation, login) //

    userRouters.get("/refresh", refreshToken)
    
    userRouters.get("/find/password/:email", isAuth, )

    userRouters.put("/change/password", isAuth, )
    
    userRouters.put("/Info", isAuth, updateUserInfo) // 
    
    userRouters.get("/check/:email", )

    userRouters.delete("/", isAuth, softDeleteUser) //

    userRouters.put("/restore/:id", restoreUser) // 

    userRouters.get("/initialize", isAuth, )

    userRouters.get("/signout", isAuth, )

}