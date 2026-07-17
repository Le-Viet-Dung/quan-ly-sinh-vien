import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class STUDENT {
  @PrimaryGeneratedColumn()
  SID: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;
}
