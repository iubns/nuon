import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import AttendType from './attendType'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    sex: string

    @Column()
    phone: string

    @Column()
    attendType: AttendType
}