import { Request, Response } from "express";
import YearService from "../../services/yearService";
import Container from "typedi";

export const getYearlyData = async (req: Request, res: Response) => {
  const yearServiceInstance = Container.get(YearService);

  const result = await yearServiceInstance.getYear({
    userId: req.body.user_id as number,
  });

  res.status(200).send(result);
};
