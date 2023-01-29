import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectConnection, InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Word, WordSchema } from "./word.model";
import { Connection, Model } from 'mongoose';

@Injectable()
export class WordsService {
    private words: Word[] = [];
    constructor(@InjectModel('words') private readonly wordModel: Model<Word>) { }

    async insertWord(word: string) {
        const newWord = new this.wordModel({
            word_text: word
        })
        const result = await newWord.save();
        console.log(result);
        return result._id;
    }


    async getWords() {
        return await this.wordModel.find()
    }

    async getSingleWord(word: string) {
        return this.findWord(word)
    }

    async getSingleWordId(id: string){
        const wordFound = await this.wordModel.find({
            _id: id
        });
        if (!wordFound) throw new NotFoundException("Nie znaleziono słowa");
        return wordFound
    }

    async updateWord(old_word: string, new_word: string) {
        this.findWord(old_word)
        if (!new_word) throw new NotFoundException("Pusty new word");
        //await this.wordModel.updateOne({ word_text: old_word }, { word_text: new_word })
        await this.wordModel.findOneAndUpdate({ word_text: old_word }, { word_text: new_word })
    }

    async deleteWord(word: string) {
        const wordFound = this.findWord(word)
        await this.wordModel.deleteOne({ word_text: word })
    }

    private async findWord(word: string) {
        const wordFound = await this.wordModel.find({
            word_text: word
        });
        if (!wordFound) throw new NotFoundException("Nie znaleziono słowa");
        return wordFound
    }
}