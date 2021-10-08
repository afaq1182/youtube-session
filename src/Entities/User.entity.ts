import { Exclude, Expose } from "class-transformer";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order.entity";


@Entity()
export class Users extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @OneToOne(type => Order, orders => orders.id, {onDelete: "CASCADE"})
    orders: Order;

    @Column()
    @Expose({groups: ['user.isAdmin']})
    password: string

    @Column({type: 'tinyint'})
    @Exclude()
    isAdmin: boolean

    @Column({type: 'tinyint'})
    @Exclude()
    isStaff: boolean


}