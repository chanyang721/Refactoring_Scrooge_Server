import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Agency } from "./agency";
import { User } from "./user";

@Entity({ name: "Enterprise" })
export class Enterprise {
  @PrimaryGeneratedColumn({ type: "bigint" })
  key?: number;

  @Column()
  role?: string;

  @Column()
  dept?: string;

  @Column()
  rank?: string;

  @Column()
  position?: string;

  @Column()
  purpose?: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt?: Date;

  @DeleteDateColumn({ type: "timestamp" })
  deletedAt?: Date;

  @OneToMany(() => User, (user) => user.enterprise, {})
  user: User[];

  @ManyToOne(() => Agency, (agency) => agency.enterprise, {})
  agency: Agency[];
}
