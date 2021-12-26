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
import { wrapTryCatch } from "../../helper/utils/wrapTryCatch";

const userRouters = Router();

export default (router: Router) => {
  router.use("/user", userRouters);

  userRouters.post(
    "/signup",
    upload.single("photo"),
    wrapTryCatch(createVaildation),
    wrapTryCatch(createUser)
  );

  userRouters.post(
    "/login",
    wrapTryCatch(loginVaildation),
    wrapTryCatch(login)
  );

  userRouters.get("/refresh", wrapTryCatch(refreshToken));

  userRouters.get("/password/:email", isAuth, wrapTryCatch(sendNewPassword));

  userRouters.put(
    "/password",
    isAuth,
    wrapTryCatch(passwordVaildation),
    wrapTryCatch(updatePassword)
  );

  userRouters.put(
    "/Info",
    upload.array("photos", 3),
    isAuth,
    wrapTryCatch(updateUserInfo)
  );

  userRouters.get("/check/:email", wrapTryCatch(checkEmail));

  userRouters.delete("/", isAuth, wrapTryCatch(softDeleteUser));

  userRouters.put("/restore/:id", wrapTryCatch(restoreUser));

  userRouters.get("/initialize", isAuth, wrapTryCatch(initialize));

  userRouters.get("/signout", wrapTryCatch(isAuth));
};
