import { Module } from '@nestjs/common';
import { randomController } from "./random.controller";
import { randomService } from "./random.service";
import { MongooseModule } from '@nestjs/mongoose';
import { WordSchema } from './word.model';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: "words", schema: WordSchema }])
    ],
    controllers: [randomController],
    providers: [randomService],
  })
export class RandomModule {}