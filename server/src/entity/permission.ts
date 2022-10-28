import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

export enum PermissionType{
    superUser,
    admin,
    userList,
    resetPassword,
    carpooling,
    permisionManage,
    showRoomAssignment,
    roomManage,
    showGroupAssignment,
    groupManage,
}

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.permissions)
    user: User

    @Column()
    permissionType: PermissionType

    @Column()
    have: boolean
}