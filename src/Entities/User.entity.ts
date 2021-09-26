import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order.entity";


@Entity()
export class Users extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @OneToOne(type => Order, order => order.id)
    orders: Order[];

    @Column()
    password: string

    @Column({type: 'tinyint'})
    isAdmin: boolean

    @Column({type: 'tinyint'})
    isStaff: boolean


}