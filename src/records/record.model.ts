import { Document, Schema } from 'mongoose';

export const RecordSchema = new Schema({
    word_text: {
        type: Schema.Types.ObjectId,
        ref: 'words'
    },
    incorrect_letters: { type: Number },
    time: { type: Number },
    date: { type: Date }
});


export interface Record extends Document {

    word_text: {
        type: Schema.Types.ObjectId,
        ref: 'words'
    };
    incorrect_letters: number;
    time: number;
    date: Date;

}
