import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    length: 32,
  })
  login: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_admin: boolean;
}
