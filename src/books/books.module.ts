import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "./entities/books.entity";
import { BookService } from "./books.service";
import { BookController } from "./books.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers: [BookController],
    providers: [BookService],
})

export class BookModule{}