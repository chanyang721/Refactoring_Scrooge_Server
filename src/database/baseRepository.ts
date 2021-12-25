import { getRepository, EntityTarget, Repository } from "typeorm";

export class BaseRepository<entity> extends Repository<entity> {
  protected readonly repository: Repository<entity>;

  constructor(entity: EntityTarget<entity>) {
    super();
    this.repository = getRepository(entity);
  }
}
