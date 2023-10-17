import { IsString } from "class-validator";

export class CreateFeedingDto {
    @IsString()
    feeding_schedules: string;
    
    @IsString()
    types_of_feed: string;
    
    @IsString()
    dietary: string;

    @IsString()
    worker_id: string;

    @IsString()
    animal_id: string;
}
