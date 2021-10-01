import { type } from "os";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Double, Unique, ManyToOne, JoinColumn } from "typeorm";
import { Inventory } from "./Inventory.entity";

@Entity()
@Unique(['name'])
export class Dish extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column({type: "double"})
    InventoryFactor: number

    @Column()
    ImagePath: string

    @Column()
    InventoryItem: number

    @ManyToOne(type => Inventory, inventory => inventory.id, {onDelete: 'CASCADE'})
    @JoinColumn()
    inventory: number

}