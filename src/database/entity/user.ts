import { Entity, Column, OneToMany, Index, Unique, BeforeInsert } from "typeorm";
import bcrypt from "bcrypt"
import { BaseColumn } from "./default";
import { Feedback } from "./feedback";
import { Category } from "./category";
import { Money } from "./money";
import { Level } from "./level";
import { Achievement } from "./achievement";

@Entity({ name: "user" })
export class User extends BaseColumn {

    @Column()
    name: string;

    @Column()
    @Index()
    email: string;

    @Column()
    password: string;

    @Column()
    birthday: string;

    @Column({ unique: true })
    phonenumber: string;

    @Column()
    sex: string;

    @Column({ default: "photos" })
    photos: string;

    @Column({ default: "/main" })
    rediract: string;

    @Column({ default: false })
    darkmode: boolean;

    @Column({ default: 0 })
    experience: number;

    @BeforeInsert()
    setPassword(password: string) {
        const salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.hashSync(password || this.password, salt)
    }

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