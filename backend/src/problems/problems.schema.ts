import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Problem extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    inputDescription: string;

    @Prop({ required: true })
    outputDescription: string;

    @Prop({ type: [String], default: [] })
    tags: string[];

    @Prop({ type: [{ input: String, output: String }], default: [] })
    testCases: { input: string; output: string }[];
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);