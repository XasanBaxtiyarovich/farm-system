import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMilkProductionDto {
    milk_yeild: number;
    
    @IsNumber()
    milk_schedule: number;
    
    @IsNumber()
    milk_quality: number;

    @IsString()
    @IsNotEmpty()
    animal_id: string;
}