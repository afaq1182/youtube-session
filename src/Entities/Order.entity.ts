import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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

    @Column()
    discount: number

    @Column({type: 'boolean', default: false})
    CheckedOut: boolean

    @Column({type: "timestamp"})
    CreatedAt: string

    @Column({type: "timestamp", default: "2021-01-01"})
    CheckedOutAt: string
}