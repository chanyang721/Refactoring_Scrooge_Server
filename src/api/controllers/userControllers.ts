import { Request, Response } from "express";
import { Container } from "typedi";
import { UserService } from "../../services/userService";
import Jwt from "../../helper/utils/jwt";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userServiceInstance = Container.get(UserService);

    const { newUser } = await userServiceInstance.insertUser(req.body);

    res.status(200).send({ newUser, message: "회원가입 성공" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { id } = req.body.registeredUser;
    const userServiceInstance = Container.get(UserService);
    console.log(
      id,
      "--------------------------------------------",
      userServiceInstance
    );
    const { accessToken, refreshToken } = await userServiceInstance.login({
      id,
    });

    res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        sameSite: "none",
        secure: true,
        httpOnly: true,
      })
      .send({
        accessToken,
        refreshToken,
        message: "로그인 성공",
      });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const softDeleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const userServiceInstance = Container.get(UserService);

    await userServiceInstance.softDeleteUser({ id });

    res.status(200).send({ message: "삭제되었습니다" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const userServiceInstance = Container.get(UserService);

    await userServiceInstance.updateUserInfo(req.body);

    res.status(200).send({ message: "수정되었습니다" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const restoreUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const userServiceInstance = Container.get(UserService);

    // const { affected } = await userServiceInstance.restoreUser(id);

    // res.status(200).send({ message: "복구되었습니다", affected });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const JwtInstance = Container.get(Jwt);

    const refreshToken = JwtInstance.unpackBearer({
      BearerToken: req.cookies.refreshToken,
    });

    const { id }: any = JwtInstance.decodeToken({ token: refreshToken });

    const newAccessToken = JwtInstance.genToken("ACCESS_TOKEN", "10h");

    res.status(200).send({
      accessToken: newAccessToken({ id }),
      message: "토큰 재발급 성공",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const sendNewPassword = async (req: Request, res: Response) => {
  try {
    const {
      params: { email },
      body: { id },
    } = req;

    const userServiceInstance = Container.get(UserService);

    const { response, newPassword } = await userServiceInstance.resetPassword(
      email
    );

    await userServiceInstance.updateUserInfo({ password: newPassword, id });

    res.status(200).send({
      response,
      message: "입력한 이메일로 임시 비밀번호를 전송했습니다",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  try {
    const { id, newPassword } = req.body;

    const userServiceInstance = Container.get(UserService);

    // const { affected } = await userServiceInstance.updateUserInfo({
    //   id,
    //   password: newPassword,
    // });

    res.status(200).send({
      // affected,
      message: "비밀번호가 변경되었습니다",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const checkEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const userServiceInstance = Container.get(UserService);

    const duplicEmail = await userServiceInstance.checkEmail(email);

    res.status(200).send({
      // email: duplicEmail.email,
      message: "이미 등록된 이메일입니다",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const initialize = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const userServiceInstance = Container.get(UserService);

    const userInfo = await userServiceInstance.getUserInfoById(id);

    res.status(200).send({ userInfo, message: "유저 정보 업데이트 완료" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
