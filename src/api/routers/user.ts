import { Router } from "express";
import { isAuth } from "../../helper/middlewares/auth";
import upload from "../../helper/middlewares/multer";
import {
  createVaildation,
  loginVaildation,
  passwordVaildation,
} from "../../helper/middlewares/vaildations/userVaildation";
import {
  createUser,
  login,
  softDeleteUser,
  updateUserInfo,
  restoreUser,
  refreshToken,
  sendNewPassword,
  updatePassword,
  checkEmail,
  initialize,
} from "../controllers/userControllers";

const userRouters = Router();

export default (router: Router) => {
  router.use("/user", userRouters);

  userRouters.post(
    "/signup",
    createVaildation,
    upload.single("photo"),
    createUser
  );

  userRouters.post("/login", loginVaildation, login);

  userRouters.get("/refresh", refreshToken);

  userRouters.get("/password/:email", isAuth, sendNewPassword);

  userRouters.put("/password", isAuth, passwordVaildation, updatePassword);

  userRouters.put("/Info", isAuth, upload.array("photos", 3), updateUserInfo);

  userRouters.get("/check/:email", checkEmail);

  userRouters.delete("/", isAuth, softDeleteUser);

  userRouters.put("/restore/:id", restoreUser);

  userRouters.get("/initialize", isAuth, initialize);

  userRouters.get("/signout", isAuth);
};
