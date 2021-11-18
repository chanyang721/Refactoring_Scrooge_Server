import { Entity, Column, OneToMany, Index, Unique, BeforeInsert } from "typeorm";
import bcrypt from "bcrypt"
import { BaseColumn } from "./default";
import { Feedback } from "./feedback";
import { Category } from "./category";
import { Money } from "./money";
import { Level } from "./level";
import { Achievement } from "./achievement";

@Entity({ name: "user" })
@Index(["email", "phonenumber"], { unique: true })
export class User extends BaseColumn {

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    birthday: string;

    @Column({ unique: true })
    phonenumber: string;

    @Column()
    gender: string;

    @Column({ default: "photos" })
    photos: string;

    @Column({ default: "/main" })
    rediract: string;

    @Column({ default: false })
    darkmode: boolean;

    @Column({ default: 0 })
    experience: number;



    @OneToMany(() => Feedback, (feedback) => feedback.user, { onDelete: "CASCADE" })
    feedback: Feedback[]

    @OneToMany(() => Money, (money) => money.user, { onDelete: "CASCADE" })
    money: Money[]

    @OneToMany(() => Category, (category) => category.user, { onDelete: "CASCADE" })
    category: Category[]

    @OneToMany(() => Level, (level) => level.user, { onDelete: "CASCADE" })
    level: Level[]

    @OneToMany(() => Achievement, (achievement) => achievement.user, { onDelete: "CASCADE" })
    achievement: Achievement[]
}