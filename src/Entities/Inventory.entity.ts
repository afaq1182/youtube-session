import { BaseEntity, Column, Double, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dish } from "./Dish.entity";

@Entity()
export class Inventory extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    category: string

    @Column({type: 'double'})
    amount: number;

    @Column()
    unit: string

    @OneToMany(type => Dish, whatever => whatever.id)
    dish: Dish
}