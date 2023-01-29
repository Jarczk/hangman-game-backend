import { Module } from '@nestjs/common';
import { RecordController } from "./record.controller";
import { RecordService } from "./record.service";
import { MongooseModule } from '@nestjs/mongoose';
import { RecordSchema } from './record.model';
import { WordsModule } from 'src/words/words.module';
import { WordSchema } from 'src/words/word.model';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: "records", schema: RecordSchema }]),
    ],
    controllers: [RecordController],
    providers: [RecordService],
  })
export class RecordModule {}