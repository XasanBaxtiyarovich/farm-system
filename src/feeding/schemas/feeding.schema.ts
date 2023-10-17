import mongoose, { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Worker } from "../../worker/schemas/worker.schema";
import { Animal } from "../../animals/schemas/animal.schema";

export type FeedingDocument = HydratedDocument<Feeding>;

@Schema({ versionKey: false })
export class Feeding {
    @Prop()
    feeding_schedules: string;
    
    @Prop()
    types_of_feed: string;
    
    @Prop()
    dietary: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
    worker_id: Worker;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
    animal_id: Animal;
}
export const FeedingSchema = SchemaFactory.createForClass(Feeding);