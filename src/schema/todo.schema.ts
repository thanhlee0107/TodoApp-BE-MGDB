import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true })
export class Todo {
  @Prop({ required: true })
  title: string;
  @Prop()
  content: string;
  @Prop({ default: 'To-do' })
  status: string;
  @Prop()
  dateTime: Date;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
