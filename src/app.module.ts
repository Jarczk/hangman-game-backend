import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordsModule } from './words/words.module';
import { RecordModule } from './records/record.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user:Hangman123@hangman.n1ngrfi.mongodb.net/Hangman?retryWrites=true&w=majority', {
    }),
    WordsModule,
    RecordModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
