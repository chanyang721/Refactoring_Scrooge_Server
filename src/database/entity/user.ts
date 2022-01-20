import {
  Entity,
  Column,
  OneToMany,
  Index,
  Unique,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";

import { Feedback } from "./feedback";
import { Category } from "./category";
import { Money } from "./money";
import { Level } from "./level";
import { Achievement } from "./achievement";
import { Agency } from "./agency";
import { Enterprise } from "./enterprise";

@Entity({
  name: "user",
  orderBy: {
    createdAt: "ASC",
  },
})
@Index(["email", "phone"], { unique: true })
export class User {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id?: number;

  @Column("simple-json")
  profile?: { name?: string; nickname?: string };

  @Column()
  email?: string;

  @Column()
  password?: string;

  @Column()
  birthday?: string;

  @Column({ default: "010-1234-1234" })
  phone?: string;

  @Column({ default: "남" })
  gender?: string;

  @Column({ default: "photos" })
  photos?: string;

  @Column({ default: "/main" })
  redirect?: string;

  @Column({ default: false })
  darkmode?: boolean;

  @Column({ default: 0 })
  experience?: number;

  @Column({ nullable: true })
  agency_key?: number;

  @CreateDateColumn()
  createdAt?: number;

  @UpdateDateColumn()
  updatedAt?: number;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: number;

  @OneToMany(() => Feedback, (feedback) => feedback.user, {
    onDelete: "CASCADE",
  })
  feedback?: Feedback[];

  @OneToMany(() => Money, (money) => money.user, { onDelete: "CASCADE" })
  money?: Money[];

  @OneToMany(() => Category, (category) => category.user, {
    onDelete: "CASCADE",
  })
  category?: Category[];

  @OneToMany(() => Level, (level) => level.user, { onDelete: "CASCADE" })
  level?: Level[];

  @OneToMany(() => Achievement, (achievement) => achievement.user, {
    onDelete: "CASCADE",
  })
  achievement?: Achievement[];

  @ManyToOne(() => Agency, (agency) => agency.user, {})
  @JoinColumn({ name: "agency_key" })
  agency?: Agency[];

  @OneToOne(() => Enterprise, (enterprise) => enterprise.user, {})
  enterprise?: Enterprise[];
}
