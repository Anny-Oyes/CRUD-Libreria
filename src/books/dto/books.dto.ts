import { IsString, IsNotEmpty, IsNumber, MinLength, IsOptional } from "class-validator";

export class CreateBooksDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNumber()
    @IsOptional()
    page?:number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsOptional()
    bookReview?: string;
}
