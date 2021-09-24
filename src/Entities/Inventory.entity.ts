import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    Category: string

    // @Column()

}