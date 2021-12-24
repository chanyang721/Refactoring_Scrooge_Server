import { Request, Response } from "express";
import { YearService } from "../../services/yearService";
import Container from "typedi";

export const getYearlyData = async (req: Request, res: Response) => {
  try {
    const yearServiceInstance = Container.get(YearService);

    const result = await yearServiceInstance.getYear({
      userId: req.body.user_id as number,
    });

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
