import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

import { Animal } from "../../animals/schemas/animal.schema";

export type MeatProductionDocument = HydratedDocument<MeatProduction>;

@Schema({ versionKey: false })
export class MeatProduction {
    @Prop()
    meat_yeild: number;
    
    @Prop()
    slaughter_date: Date;
    
    @Prop()
    shearing_schedule: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
    animal_id: Animal
}
export const MeatProductionSchema = SchemaFactory.createForClass(MeatProduction);