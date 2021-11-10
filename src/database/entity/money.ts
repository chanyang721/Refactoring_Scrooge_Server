import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import { Category } from "./category";
import { BaseColumn } from "./default";
import { User } from "./user"

@Entity({ name: "money" })
export class Money extends BaseColumn {

    @Column()
    cost: number;

    @Column()
    memo: string;

    @Column()
    data: string;

    @Column()
    categoryId: number;

    @Column()
    userId: number;

    @ManyToOne(() => User, (user) => user.money, { onDelete: "CASCADE" })
    @JoinColumn({ name: "userId" })
    user: User[];

    @ManyToOne(() => Category, (category) => category.money, { onDelete: "CASCADE" })
    @JoinColumn({ name: "categoryId" })
    category: Category[];

}