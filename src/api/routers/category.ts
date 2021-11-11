import { Router } from "express";
// import { } from "../controllers";
// import { } from "../../middlewares/vaildations"

const categoryRouters = Router();

export default (router: Router) => {
    router.use("/category", categoryRouters)

    categoryRouters.post("/", )

    categoryRouters.put("/", )

    categoryRouters.delete("/", )

    categoryRouters.post("/sort", )

    categoryRouters.get("/budget", )
    
}