import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ContentStatus } from "../enum/ContentStatus.enum";



@Entity('content')
export class Content{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({type:'varchar', length: 255, name:'title'})
    title: string;

    @Column({type: 'int', name:'year'})
    year : Number;

    @Column({type:'text', name:'decsription'})
    description: string;

    @Column({type:'text', name:'thumbnail'})
    thumbnail : string;

    @Column({type:'enum', enum:ContentStatus, default: ContentStatus.OPEN})
    status : string;

    @CreateDateColumn({name: 'created_at'})
    createAt : Date;

    @UpdateDateColumn({name: 'updated_at'})
    updateAt : Date;
}




