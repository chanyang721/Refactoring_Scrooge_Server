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
  @PrimaryGeneratedColumn()
  key?: number;

  @Column()
  feedback?: string;

  @Column()
  userId?: number;

  @CreateDateColumn()
  createdAt?: number;

  @UpdateDateColumn()
  updatedAt?: number;

  @DeleteDateColumn()
  deletedAt?: number;

  @ManyToOne(() => User, (user) => user.feedback, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];
}
