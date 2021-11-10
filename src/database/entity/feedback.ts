import { Entity, Column, ManyToOne, JoinColumn ,Index, Unique, BeforeInsert } from "typeorm"
import { BaseColumn } from "./default"
import { User } from "./user";

@Entity({ name: "feedback" })
export class Feedback extends BaseColumn {

    @Column()
    feedback: string;

    @Column()
    userId: number;

    @ManyToOne(() => User, (user) => user.feedback, { onDelete: "CASCADE" })
    @JoinColumn({ name: "userId" })
    user: User[];
}