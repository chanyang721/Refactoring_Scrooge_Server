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
  @PrimaryGeneratedColumn()
  key?: number;

  @Column()
  name?: string;

  @Column()
  budget?: number;

  @Column()
  emoji?: string;

  @Column()
  userId?: number;

  @CreateDateColumn()
  createdAt?: number;

  @UpdateDateColumn()
  updatedAt?: number;

  @DeleteDateColumn()
  deletedAt?: number;

  @ManyToOne(() => User, (user) => user.category, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];

  @OneToMany(() => Money, (money) => money.category, { onDelete: "CASCADE" })
  money?: Money[];
}
