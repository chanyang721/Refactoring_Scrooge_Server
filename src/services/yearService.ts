import { BaseRepository } from "../database/baseRepository";
import { Money } from "../database/entity/money";
import { Service } from "typedi";
import { getRepository } from "typeorm";

@Service()
export class YearService extends BaseRepository<Money> {
  constructor() {
    super(Money);
  }

  public async getYear(data: Money) {
    const moneyRepo = getRepository(Money);

    console.log(moneyRepo);
  }
}
