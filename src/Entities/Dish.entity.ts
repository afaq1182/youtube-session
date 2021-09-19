import { type } from "os";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Double, Unique } from "typeorm";

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
}