import { Body, Controller, Get, Post, Patch, ParseUUIDPipe } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { CreateBooksDto } from "./dto/books.dto";
import { BookService } from "./books.service";

@Controller('books')

export class BookController {
    constructor (
        private readonly bookServiceRepo: BookService
    ){}
        @Post()
        create(@Body() bookDto: CreateBooksDto){
            return this.bookServiceRepo.create(bookDto);
    }

    @Get()
    findAll(){
        return this.bookServiceRepo.findAll();
    }

    @Get(':id')
    findOne(
        @Param('id', ParseUUIDPipe) id: string) {
            return this.bookServiceRepo.findOne(id);
        }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.bookServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateBookDto: CreateBooksDto
    ){
      return this.bookServiceRepo.update(id, updateBookDto);
    }
  }
