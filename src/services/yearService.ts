import { Service } from "typedi";
import { Money } from "../database/entity/money";
import { MoneyRepository } from "../repository/moneyRepository";
import { CategoryRepository } from "../repository/categoryRepository";
import { AchievementRepository } from "../repository/achievementRepository";

@Service()
export default class YearService {
  constructor(
    private readonly moneyRepository: MoneyRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly achievementRepository: AchievementRepository
  ) {}

  public async getYear(data: Money) {}
}
