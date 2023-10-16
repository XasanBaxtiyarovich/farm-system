import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFiberProductionDto {
    @IsNumber()
    @IsNotEmpty()
    fiber_yield: number;
    
    @IsNumber()
    @IsNotEmpty()
    shearing_schedule: number;
    
    @IsNumber()
    @IsNotEmpty()
    fiber_quality: number;

    @IsString()
    @IsNotEmpty()
    animal_id: string;
}