import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  userName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    length: 15,
  })
  phoneNumber: string;

  @Column({
    default: 'User',
  })
  role: 'User' | 'Admin';

  @Column()
  isActive: boolean;
}
