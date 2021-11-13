import { Transform } from "class-transformer";
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

    @Transform((date1) => moment(date1.value).format('DD-MM-yyyy hh:mm:ss A'))
    @Column({type: "timestamp", default: moment().format('YYYY-MM-DD hh-mm-ss')})
    CreatedAt: string;

    @Column()
    type: string; 

    @Transform((date1) => moment(date1.value).format('DD-MM-yyyy hh:mm:ss A'))
    @Column({type: "timestamp", default: '2021-01-01'})
    UpdatedAt: string;

    @ManyToOne(type => ExpenseType, category => category.id, {onDelete: 'CASCADE'})
    category: number;
}