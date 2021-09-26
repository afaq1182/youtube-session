import * as moment from "moment";
import { BaseEntity, Column, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ExpenseType } from "./Expense-Types.entity";

@Entity()
export class Expense extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: "double"})
    amount: Double;

    @Column({type: "timestamp", default: moment().format('YYYY-MM-DD hh-mm-ss')})
    CreatedAt: string;

    @Column()
    type: string; 

    @ManyToOne(type => ExpenseType, category => category.id, {onDelete: 'CASCADE'})
    category: number;
}