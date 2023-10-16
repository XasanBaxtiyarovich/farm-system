import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type VaccineDocument = HydratedDocument<Vaccine>;

@Schema({ versionKey: false })
export class Vaccine {
    @Prop({ required: true })
    vaccine_type: string;

    @Prop({ required: true })
    vaccine_name: string;
}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine)