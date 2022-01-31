import { Service } from "typedi";
import { MoneyRepository } from "../repository/moneyRepository";

@Service()
export default class MoneyService {
  constructor(private readonly moneyRepository: MoneyRepository) {}
}
