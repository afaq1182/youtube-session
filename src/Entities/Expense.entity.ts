import { BaseEntity, Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expense extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column({type: "double"})
    amount: Double;

    @Column({type: "timestamp"})
    CreatedAt: string;
}