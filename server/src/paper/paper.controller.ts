import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePaperDto } from './dto/create-paper.dto';
import { Paper } from './paper.model';
import { PaperService } from './paper.service';

@Controller('paper')
export class PaperController {
  constructor(private paperService: PaperService) {}

  @Get('/:id')
  getPaper(@Param('id') id: string): Paper {
    return this.paperService.getPaperById(id);
  }

  @Post('/')
  createPaper(@Body() createPaperDto: CreatePaperDto): Paper {
    return this.paperService.createPaper(createPaperDto);
  }

  @Delete('/:id')
  deletePaper(@Param('id') id: string): void {
    return this.paperService.deletePaperById(id);
  }
}
