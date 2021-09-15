import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column({type: 'tinyint'})
    isAdmin: boolean

    @Column({type: 'tinyint'})
    isStaff: boolean
}