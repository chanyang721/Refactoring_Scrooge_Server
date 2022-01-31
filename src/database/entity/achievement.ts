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

  @Column({ name: "leastSpend" })
  least_spend?: number;

  @Column({ type: "bigint" })
  userId?: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt?: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.achievement, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];
}
