import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  iva: string;

  @Column({type: 'numeric' })
  amount: number;

  @Column({type: 'numeric' })
  unitPrice: number;

  @Column({type: 'numeric'})
  total: number;
}