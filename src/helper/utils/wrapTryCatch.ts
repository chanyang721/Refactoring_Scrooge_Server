import { Request, Response, NextFunction } from "express";
import logger from "../../config/winston";
import { BaseError, BaseErrorDTO } from "./error/baseError";

// export const wrapTryCatch = function (controller) {
//   return function (req: Request, res: Response, next?: NextFunction) {
//     return controller(req, res).catch(next);
//   };
// };

// export const wrapTryCatch = (action) => (req, res, next) =>
//   action(req, res).catch(next);
interface TryCatchDTO {
  (req: Request, res: Response, next: NextFunction): void | BaseErrorDTO;
}

export const wrapTryCatch = function (controller: TryCatchDTO) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      controller(req, res, next);
    } catch (error) {
      logger.error(error);
      const { name, statusCode, message, isOperational }: BaseErrorDTO = error;
      res.status(400).send({ name, statusCode, message, isOperational });
    }
  };
};
