import { Request, Response, NextFunction } from "express";
import logger from "../../config/winston";
// interface TryCatchDTO {
//   (req: Request, res: Response, next: NextFunction): Response;
// }

export const wrapTryCatch = function (controller) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      controller(req, res, next);
    } catch (error) {
      logger.error(error);
      const { name, statusCode, message, isOperational } = error;
      res.status(400).send({ name, statusCode, message, isOperational });
    }
  };
};
