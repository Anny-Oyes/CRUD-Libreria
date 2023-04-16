import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBooksDto } from "./dto/books.dto";
import { Book } from "./entities/books.entity";

@Injectable()

export class BookService {
    constructor (
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ) {}

    async create(bookDto: CreateBooksDto) {
        const books = this.bookRepository.create(bookDto);
        await this.bookRepository.save(bookDto);

        return books;
    }

    findAll(){
        return this.bookRepository.find();
    }

    findOne(id: string) {
        return this.bookRepository.findOneBy({id});
    }

    async remove(id: string){
        const books = await this.findOne(id);
        await this.bookRepository.remove(books);
        return 'El libro a sido eliminado correctamente'
    }

    async update(id: string, cambiado: CreateBooksDto) {
        const findBooks = await this.findOne(id);
        const updatedBooks = await this.bookRepository.merge(
          findBooks,
          cambiado,
        );
    
        return this.bookRepository.save(updatedBooks);
      }
    }