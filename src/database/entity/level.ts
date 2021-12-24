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

@Entity()
export class Level {
  @PrimaryGeneratedColumn()
  key?: number;

  @Column()
  level?: number;

  @Column()
  theme?: boolean;

  @Column()
  explore?: boolean;

  @Column()
  userId?: number;

  @CreateDateColumn()
  createdAt?: number;

  @UpdateDateColumn()
  updatedAt?: number;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: number;

  @ManyToOne(() => User, (user) => user.level, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];
}
