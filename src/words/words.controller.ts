import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { Types } from "mongoose";
import { Record } from "src/records/record.model";
import { WordsService } from "./words.service";

@Controller('words')
export class WordsController {
    constructor(private readonly wordsService: WordsService) { }
    getAllRecords(): Promise<Omit<Record & { _id: Types.ObjectId; }, never>[]> {
        throw new Error("Method not implemented.");
    }
    getRecord(id: string): Promise<(Record & { _id: Types.ObjectId; })[]> {
        throw new Error("Method not implemented.");
    }
    removeRecord(id: string) {
        throw new Error("Method not implemented.");
    }

    @Post()
    addWord(@Body('word') word_text: string) {
        const generatedId = this.wordsService.insertWord(word_text)
        return { _id: generatedId }//{word: newWord}
    }

    @Get()
    getAllWords() {
        return this.wordsService.getWords()//
    }

    //@Get(':word')
    //getWord(@Param('word') word_text: string) {
    //    return this.wordsService.getSingleWord(word_text)
    //}

    @Get(':id')
    getWordById(@Param('id') id: string) {
        return this.wordsService.getSingleWordId(id)
    }

    @Patch(':word')
    updateWord(@Param('word') word_text: string, @Body('new_word') new_word: string) {
        this.wordsService.updateWord(word_text, new_word)
        return null
    }

    @Delete(':word')
    removeWord(@Param('word') word: string) {
        this.wordsService.deleteWord(word)
        return null;
    }
}