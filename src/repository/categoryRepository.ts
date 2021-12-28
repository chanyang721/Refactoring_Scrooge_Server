import { Service } from "typedi";
import { Category } from "../database/entity/category";
import { BaseRepository } from "../database/baseRepository";

@Service()
export class CategoryRepository extends BaseRepository<Category> {
  private constructor() {
    super(Category);
  }
}
