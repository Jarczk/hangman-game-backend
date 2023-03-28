import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('records')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post()
  addWord(
    @Body('word') word: string,
    @Body('incorrect') incorrect: number,
    @Body('time') time: number,
    @Body('date') date: Date,
  ) {
    const generatedId = this.recordService.insertRecord(
      word,
      incorrect,
      time,
      date,
    );
    return { _id: generatedId };
  }

  @Get()
  getAllRecords() {
    return this.recordService.getRecords();
  }

  @Get(':id')
  getRecord(@Param('id') id: string) {
    return this.recordService.getSingleRecord(id);
  }

  @Patch(':id')
  updateWord(
    @Param('id') id: string,
    @Body('word') word: string,
    @Body('incorrect') incorrect: number,
    @Body('time') time: number,
    @Body('date') date: Date,
  ) {
    this.recordService.updateRecord(id, word, incorrect, time, date);
    return null;
  }

  @Delete(':id')
  removeRecord(@Param('id') id: string) {
    this.recordService.deleteRecord(id);
    return null;
  }
}
