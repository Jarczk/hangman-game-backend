//import { MongooseModule, Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types, Schema as mSchema, SchemaTypes } from 'mongoose';

var uniqueValidator = require('mongoose-unique-validator');

export const WordSchema=new mSchema({
    //_id: {type: SchemaTypes.ObjectId},
    word_text:{type:String, required:true, unique: true},
  //title:{type:String,required:true},
  //description:{type:String,required:true},
  //price:{type:Number,required:true},
});


export interface Word extends Document{
 
     //_id: Types.ObjectId;
     word_text: string;
     //title: string;
     //description: string;
     //price: number;
  
}

WordSchema.plugin(uniqueValidator)