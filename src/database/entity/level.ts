import {Entity, Column, ManyToOne, JoinColumn} from "typeorm";
import {BaseColumn} from "./default";
import {User} from "./user";

@Entity()
export class Level extends BaseColumn {
    @Column()
    level?: number;

    @Column()
    theme?: boolean;

    @Column()
    explore?: boolean;

    @Column()
    userId?: number;

    @ManyToOne(() => User, (user) => user.level, {onDelete: "CASCADE"})
    @JoinColumn({name: "userId"})
    user: User[];
}
