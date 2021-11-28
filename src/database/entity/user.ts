import { Entity, Column, OneToMany, Index, Unique, BeforeInsert } from "typeorm";
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

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    birthday: string;

    @Column({ default: "010-1234-1234" })
    phonenumber: string;

    @Column({ default: "남"})
    gender: string;

    @Column({ default: "photos" })
    photos: string;

    @Column({ default: "/main" })
    redirect: string;

    @Column({ default: false })
    darkMode: boolean;

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