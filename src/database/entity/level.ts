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

  @Column({ type: "bigint" })
  userId?: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt?: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.level, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user?: User[];
}
