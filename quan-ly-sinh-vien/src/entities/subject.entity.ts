import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class SUBJECT {
  @PrimaryColumn({ length: 10 })
  Subject_id: string;

  @Column({ length: 50 })
  Subject_name: string;

  @Column({ type: 'int', default: 3 })
  Credits: number;
}
