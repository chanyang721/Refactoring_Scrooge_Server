import { Service } from "typedi";
import { CategoryRepository } from "../repository/categoryRepository";

@Service()
export default class MoneyService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
}
