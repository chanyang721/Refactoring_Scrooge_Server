import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseColumn } from "./default";
import { User } from "./user";

@Entity()
export class Achievement extends BaseColumn {
  @Column()
  scrooge?: number;

  @Column()
  leastspend?: number;

  @Column()
  userId?: number;

  @ManyToOne(() => User, (user) => user.achievement, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user: User[];
}
