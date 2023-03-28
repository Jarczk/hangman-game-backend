import { Controller, Get } from "@nestjs/common";
import { randomService } from "./random.service";

@Controller('random')
export class randomController {
    constructor(private readonly randomService: randomService) { }

    @Get()
    getRandomWord() {
        return this.randomService.getRandom()
    }
}