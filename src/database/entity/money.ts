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
import { Category } from "./category";
import { User } from "./user";

@Entity({ name: "money" })
export class Money {
  @PrimaryGeneratedColumn({ type: "bigint" })
  key?: number;

  @Column()
  cost?: number;

  @Column()
  memo?: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt?: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt?: Date;

  @Column({ type: "bigint" })
  categoryId?: number;

  @Column({ type: "bigint" })
  userId?: number;

  @ManyToOne(() => User, (user) => user.money, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];

  @ManyToOne(() => Category, (category) => category.money, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "categoryId" })
  category?: Category[];
}
