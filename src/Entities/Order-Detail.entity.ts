import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderDetails extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    OrderId: number;

    @Column()
    dishid: number;
}