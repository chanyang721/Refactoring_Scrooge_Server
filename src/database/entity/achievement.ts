import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { User } from "./user";

@Entity()
export class Achievement {
  @PrimaryGeneratedColumn()
  key?: number;

  @Column()
  scrooge?: number;

  @Column()
  leastspend?: number;

  @Column()
  userId?: number;

  @CreateDateColumn()
  createdAt?: number;

  @UpdateDateColumn()
  updatedAt?: number;

  @DeleteDateColumn()
  deletedAt?: number;

  @ManyToOne(() => User, (user) => user.achievement, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];
}
