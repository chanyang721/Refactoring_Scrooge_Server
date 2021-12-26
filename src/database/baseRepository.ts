import { getRepository, EntityTarget, Repository, Entity } from "typeorm";

export class BaseRepository<entity> {
  protected readonly repository: Repository<entity>;

  constructor(entity: EntityTarget<entity>) {
    this.repository = getRepository(entity);
  }
}
