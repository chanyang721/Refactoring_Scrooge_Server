import { Router } from "express";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const userRouters = Router();

export default (router: Router) => {
    router.use("/user", userRouters)

    userRouters.post("/signup", )

    userRouters.post("/login", )
    
    userRouters.post("/findpassword", )

    userRouters.put("/changepassword", )
    
    userRouters.put("/info", )
    
    userRouters.post("/checkemail", )

    userRouters.get("/refresh", )

    userRouters.delete("/", )

    userRouters.get("/initialize", )

    userRouters.get("/signout", )

}