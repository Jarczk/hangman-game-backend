import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectConnection, InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Word, WordSchema } from "./word.model";
import { Connection, Model } from 'mongoose';

@Injectable()
export class randomService {
    private words: Word[] = [];
    constructor(@InjectModel('words') private readonly wordModel: Model<Word>) { }


    async getRandom() {
        const count = this.wordModel.countDocuments();
        const random = Math.floor(Math.random() * await count)
        return await this.wordModel.findOne().skip(random)
    }
}