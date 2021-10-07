import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order.entity";

@Entity()
export class OrderDetails extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    OrderId: number;

    @Column()
    dishid: number;

    @Column()
    dishquantity: number;

    @ManyToOne(type => Order, orders => orders.id, {onDelete: "CASCADE"})
    orders: Order;
}