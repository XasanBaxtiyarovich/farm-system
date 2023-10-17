import { IsNotEmpty, IsString } from "class-validator";

export class CreateRecordsOfFeedingDto {
    @IsString()
    @IsNotEmpty()
    date: Date;
    
    @IsString()
    @IsNotEmpty()
    consuption: string;

    @IsString()
    @IsNotEmpty()
    feeding_id: string;
}
