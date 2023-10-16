import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMeatProductionDto {
    @IsNumber()
    @IsNotEmpty()
    meat_yeild: number;
    
    @IsString()
    slaughter_date: Date;
    
    @IsNumber()
    @IsNotEmpty()
    shearing_schedule: number;

    @IsString()
    @IsNotEmpty()
    animal_id: string;
}