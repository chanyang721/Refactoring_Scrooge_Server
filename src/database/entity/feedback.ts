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
// import { BaseColumn } from "./default";
import { User } from "./user";

@Entity({ name: "feedback" })
export class Feedback {
  @PrimaryGeneratedColumn({ type: "bigint" })
  key?: number;

  @Column()
  feedback?: string;

  @Column({ type: "bigint" })
  userId?: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt?: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.feedback, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];
}
