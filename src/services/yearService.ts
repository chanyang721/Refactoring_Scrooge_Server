import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Money } from "../database/entity/money";

@Service()
export class YearService {
  constructor() {}

  public async getYear(data: Money) {
    const moneyRepo = getRepository(Money);

    console.log(moneyRepo);
  }
}
