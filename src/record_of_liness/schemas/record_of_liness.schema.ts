import mongoose, { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Worker } from "../../worker/schemas/worker.schema";
import { Animal } from "../../animals/schemas/animal.schema";

export type RecordOfLinessDocument = HydratedDocument<RecordOfLiness>;

@Schema({ versionKey: false })
export class RecordOfLiness {
    @Prop()
    fiber_yield: number;
    
    @Prop()
    liness_type: string;
    
    @Prop()
    date_diseanse: Date;

    @Prop()
    medicines: string;

    @Prop()
    date_treatmen: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
    animal_id: Animal

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker'})
    worker_id: Worker;
}
export const RecordOfLinessSchema = SchemaFactory.createForClass(RecordOfLiness);