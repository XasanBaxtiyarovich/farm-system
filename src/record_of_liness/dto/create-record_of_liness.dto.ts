import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRecordOfLinessDto {
    @IsNumber()
    fiber_yield: number;
    
    @IsString()
    @IsNotEmpty()
    liness_type: string;
    
    @IsString()
    @IsNotEmpty()
    date_diseanse: Date;

    @IsString()
    @IsNotEmpty()
    medicines: string;

    @IsString()
    @IsNotEmpty()
    date_treatmen: Date;

    @IsString()
    @IsNotEmpty()
    animal_id: string;

    @IsString()
    @IsNotEmpty()
    worker_id: string;
}