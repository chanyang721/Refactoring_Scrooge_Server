import { Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import UserService from "../../services/userService";
import Jwt from "../../helper/utils/jwt";

export const createUser = async (req: Request, res: Response) => {
  const userServiceInstance = Container.get(UserService);

  const { newUser } = await userServiceInstance.insertUser(req.body);

  res.status(200).send({ newUser, message: "회원가입 성공" });
};

export const login = async (req: Request, res: Response) => {
  const { id, agency_key } = req.body.registeredUser;

  const userServiceInstance = Container.get(UserService);

  const { accessToken, refreshToken } = await userServiceInstance.getToken({
    id,
    agency_key,
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
};

export const softDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;

  const userServiceInstance = Container.get(UserService);

  await userServiceInstance.softDeleteUser({ id });

  res.status(200).send({ message: "삭제되었습니다" });
};

export const updateUserInfo = async (req: Request, res: Response) => {
  const userServiceInstance = Container.get(UserService);

  if (req.files) req.body.photos = req.files[0].location;

  await userServiceInstance.updateUserInfo(req.body);

  res.status(200).send({ message: "수정되었습니다" });
};

export const restoreUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const userServiceInstance = Container.get(UserService);

  const { affected } = await userServiceInstance.restoreUser(id);

  res.status(200).send({ message: "복구되었습니다", affected });
};

export const refreshToken = async (req: Request, res: Response) => {
  const JwtInstance = Container.get(Jwt);
  // const refreshToken = JwtInstance.unpackBearer({
  //   BearerToken: req.cookies.refreshToken,
  // });
  const { refreshToken } = req.cookies;
  const { id, agency_key }: any = JwtInstance.decodeToken({
    token: refreshToken,
  });

  const newAccessToken = JwtInstance.genToken("ACCESS_TOKEN", "10h");

  res.status(200).send({
    accessToken: newAccessToken({ id, agency_key }),
    message: "토큰 재발급 성공",
  });
};

export const sendNewPassword = async (req: Request, res: Response) => {
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
};

export const updatePassword = async (req: Request, res: Response) => {
  const { id, newPassword } = req.body;

  const userServiceInstance = Container.get(UserService);

  const { affected } = await userServiceInstance.updateUserInfo({
    id,
    password: newPassword,
  });

  res.status(200).send({
    affected,
    message: "비밀번호가 변경되었습니다",
  });
};

export const checkEmail = async (req: Request, res: Response) => {
  const { email } = req.params;

  const userServiceInstance = Container.get(UserService);

  const duplicEmail = await userServiceInstance.checkEmail(email);

  res.status(200).send({
    message: `${duplicEmail.email}은 이미 등록된 이메일입니다`,
  });
};

export const getUserInfo = async (req: Request, res: Response) => {
  const { id } = req.body;

  const userServiceInstance = Container.get(UserService);

  const userInfo = await userServiceInstance.getUserInfoById(id);

  res
    .status(200)
    .send({ userInfo, message: `${userInfo.name} 회원님의 정보 입니다` });
};
