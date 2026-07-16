import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class STUDENT {
  @PrimaryGeneratedColumn()
  SID: number;

  @Column({ nullable: true })
  name: string;
}