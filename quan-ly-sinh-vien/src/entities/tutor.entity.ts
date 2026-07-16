import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TUTOR {
  @PrimaryGeneratedColumn()
  Tutor_id: number;

  @Column({ nullable: true })
  name: string;
}
