//import { MongooseModule, Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import {
  Document,
  HydratedDocument,
  Types,
  Schema as mSchema,
  SchemaTypes,
} from 'mongoose';

const uniqueValidator = require('mongoose-unique-validator');

export const WordSchema = new mSchema({
  //_id: {type: SchemaTypes.ObjectId},
  word_text: { type: String, required: true, unique: true },
});

export interface Word extends Document {
  //_id: Types.ObjectId;
  word_text: string;
}

WordSchema.plugin(uniqueValidator);
