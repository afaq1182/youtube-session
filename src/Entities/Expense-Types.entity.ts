import { type } from "os";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expense } from "./Expense.entity";

@Entity()
export class ExpenseType extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Expense, expense => expense.id, {onDelete: "CASCADE"})
    @JoinColumn()
    expense: number;
}