import { Service } from "typedi";
import { AchievementRepository } from "../repository/achievementRepository";

@Service()
export default class MoneyService {
  constructor(private readonly achievementRepository: AchievementRepository) {}
}
