import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'text'})
  title: string;

  @Column({type: 'text'})
  author: string;

  @Column({type: 'numeric', nullable:true})
  page?: number;

  @Column({type: 'numeric'})
  stock: number;

  @Column({type: 'numeric'})
  price: number;

  @Column({type: 'text', nullable: true})
  bookReview?: string;
}