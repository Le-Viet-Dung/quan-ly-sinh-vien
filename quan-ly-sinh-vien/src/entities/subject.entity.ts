import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SUBJECT {
  @PrimaryGeneratedColumn()
  SubID: number;

  @Column({ unique: true })
  subjectCode: string;

  @Column()
  name: string;

  @Column()
  credits: number;
}
