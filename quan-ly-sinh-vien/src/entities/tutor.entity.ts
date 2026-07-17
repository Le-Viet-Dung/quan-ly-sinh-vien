import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TUTOR {
  @PrimaryGeneratedColumn()
  TID: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;
}
