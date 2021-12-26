import { Request, Response, NextFunction } from "express";

// export const wrapTryCatch = function (controller) {
//   return function (req: Request, res: Response, next?: NextFunction) {
//     return controller(req, res).catch(next);
//   };
// };

// export const wrapTryCatch = (action) => (req, res, next) =>
//   action(req, res).catch(next);

export const wrapTryCatch = function (controller) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.error(error);
      const { name, statusCode, message, isOperational, stack } = error;
      res.status(400).send({ name, statusCode, message, isOperational });
    }
  };
};
