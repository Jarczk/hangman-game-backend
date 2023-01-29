import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Record } from "./record.model";
import { Model, Types } from 'mongoose';

@Injectable()
export class RecordService {
    constructor(@InjectModel('records') private readonly recordModel: Model<Record>) { }

    async insertRecord(word: string, incorrect: number, time: number, date: Date) {
        const word_id = new Types.ObjectId(word)
        const newRecord = new this.recordModel({
            word_text: word_id,
            incorrect_letters: incorrect,
            time: time,
            date: date
        })
        const result = await newRecord.save();
        console.log(result);
        return result._id;
    }


    async getRecords() {
        return await this.recordModel.find().populate('word_text')
    }

    async getSingleRecord(id: string) {
        return this.findRecord(id)
    }

    async updateRecord(id: string, word: string, incorrect: number, time: number, date: Date) {
        const recordFound = await this.findRecord(id)
        if (!word) word = recordFound[0]["word_text"].toString()
        if (!incorrect) incorrect = recordFound[0]["incorrect_letters"]
        if (!time) time = recordFound[0]["time"]
        if (!date) date = recordFound[0]["date"]
        await this.recordModel.findOneAndUpdate({ _id: id }, {
            word_text: word,
            incorrect_letters: incorrect,
            time: time,
            date: date
        })
    }

    async deleteRecord(id: string) {
        //const recordFound = this.findRecord(id)
        await this.recordModel.deleteOne({ _id: id })
    }

    private async findRecord(id: string) {
        const recordFound = await this.recordModel.find({
            _id: id
        });
        if (!recordFound) throw new NotFoundException("Nie znaleziono rekordu");
        return recordFound
    }
}
