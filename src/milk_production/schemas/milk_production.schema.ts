import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

import { Animal } from "../../animals/schemas/animal.schema";

export type MilkProductionDocument = HydratedDocument<MilkProduction>;

@Schema({ versionKey: false })
export class MilkProduction {
    @Prop()
    milk_yield: number;
    
    @Prop()
    milk_schedule: number;
    
    @Prop()
    milk_quality: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
    animal_id: Animal
}
export const MilkProductionSchema = SchemaFactory.createForClass(MilkProduction);