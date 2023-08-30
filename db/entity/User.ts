import { BaseEntity,PrimaryGeneratedColumn , Column, CreateDateColumn, Entity} from "typeorm";

@Entity()
export class user extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({nullable: false, length: 255})
    userName: string

    @Column({nullable : false})
    password: string

}
