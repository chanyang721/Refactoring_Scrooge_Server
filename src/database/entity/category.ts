import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Money } from "./money";
import { User } from "./user";

@Entity({ name: "category" })
export class Category {
  @PrimaryGeneratedColumn({ type: "bigint" })
  key?: number;

  @Column()
  name?: string;

  @Column()
  budget?: number;

  @Column()
  emoji?: string;

  @Column({ type: "bigint" })
  userId?: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt?: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt?: Date;
  @ManyToOne(() => User, (user) => user.category, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];

  @OneToMany(() => Money, (money) => money.category, { onDelete: "CASCADE" })
  money?: Money[];
}
