import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseColumn } from "./default";
import { Money } from "./money";
import { User } from "./user";

@Entity({ name: "category" })
export class Category extends BaseColumn {
    @Column()
    name?: string;

    @Column()
    budget?: number;

    @Column()
    emoji?: string;

    @Column()
    userId?: number;

    @ManyToOne(() => User, (user) => user.category, { onDelete: "CASCADE" })
    @JoinColumn({ name: "userId" })
    user: User[];

    @OneToMany(() => Money, (money) => money.category, { onDelete: "CASCADE" })
    money: Money[];
}
