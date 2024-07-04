import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('queues')
export class Queue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ length: 512 })
    description: string;
}
