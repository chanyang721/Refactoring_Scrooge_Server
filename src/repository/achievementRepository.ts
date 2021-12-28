import { Service } from "typedi";
import { Achievement } from "../database/entity/achievement";
import { BaseRepository } from "../database/baseRepository";

@Service()
export class AchievementRepository extends BaseRepository<Achievement> {
  private constructor() {
    super(Achievement);
  }
}
