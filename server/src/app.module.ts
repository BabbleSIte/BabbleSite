import { Module } from '@nestjs/common';
import { PaperModule } from './paper/paper.module';

@Module({
  imports: [PaperModule],
})
export class AppModule {}
