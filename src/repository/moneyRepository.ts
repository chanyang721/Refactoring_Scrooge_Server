import { Service } from "typedi";
import { Money } from "../database/entity/money";
import { BaseRepository } from "../database/baseRepository";

@Service()
export class MoneyRepository extends BaseRepository<Money> {
  private constructor() {
    super(Money);
  }
}
