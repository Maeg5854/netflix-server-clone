import { IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator'
import { FilmRating } from "../enum/filmRating.enum";

export class CreateContentDto{
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsNumber()
    @IsNotEmpty()
    year: Number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    thumbnail? : string;

    @IsDate()
    @IsNotEmpty()
    openDate?: Date
}