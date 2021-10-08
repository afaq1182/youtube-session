import { Exclude } from "class-transformer";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { OrderDetails } from "./Order-Detail.entity";
import { Users } from "./User.entity";

@Entity()
export class Order extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "integer"})
    TableNumber: number

    @Column({type: "double"})
    Bill: number

    @Column({type: "double"})
    Bill_Payed: number

    @ManyToOne(type => Users, user => user.id, {onDelete: "CASCADE"})
    @JoinColumn()
    user: Users

    @OneToMany(type => OrderDetails, orderdetails => orderdetails.id, {onDelete: "CASCADE"})
    @JoinColumn()
    orderdetails: number;

    @Column()
    discount: number

    @Column()
    custom_charges: number

    @Column()
    service_charges: number

    @Column({type: 'boolean', default: false})
    CheckedOut: boolean

    @Column({type: "timestamp"})
    CreatedAt: string

    @Column({type: "timestamp", default: "2021-01-01"})
    CheckedOutAt: string
}