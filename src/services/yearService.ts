import { Money } from "../database/entity/money";
import { Service } from "typedi";

@Service()
export class YearService {
  constructor() {}

  public async getYear(data: Money) {}
}
