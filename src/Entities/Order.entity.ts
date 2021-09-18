import { type } from "os";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import {Dish} from "./Dish.entity"
@Entity()
export class Order extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    // @OneToMany(type: )
    // dishes: number;

    @Column({type: "double"})
    Bill: number

    @Column({type: "double"})
    Bill_Payed: number

    @Column()
    discount: number

    @Column({type: 'boolean', default: false})
    CheckedOut: boolean

    @Column({type: "timestamp"})
    CreatedAt: string

    @Column({type: "timestamp", default: null})
    CheckOutAt: string
}