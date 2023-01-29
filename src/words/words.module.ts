import { Module } from '@nestjs/common';
import { WordsController } from "./words.controller";
import { WordsService } from "./words.service";
import { MongooseModule } from '@nestjs/mongoose';
import { WordSchema } from './word.model';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: "words", schema: WordSchema }])
    ],
    controllers: [WordsController],
    providers: [WordsService],
  })
export class WordsModule {}