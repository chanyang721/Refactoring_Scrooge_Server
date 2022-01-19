import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Enterprise } from "./enterprise";
import { User } from "./user";

@Entity({ name: "Agency" })
export class Agency {
  @PrimaryGeneratedColumn({ type: "bigint" })
  key?: number;

  @Column()
  name?: string;

  @Column()
  access_code?: string;

  @Column()
  type?: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt?: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt?: Date;

  @OneToMany(() => User, (user) => user.agency, {})
  user: User[];

  @OneToMany(() => Enterprise, (enterprise) => enterprise.agency, {})
  enterprise: Enterprise[];
}
