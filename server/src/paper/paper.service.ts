import { Injectable } from '@nestjs/common';
import { Paper } from './paper.model';
import {v1 as uuid}  from 'uuid'
import { CreatePaperDto } from './dto/create-paper.dto';
@Injectable()
export class PaperService {
    private papers:Paper[] = [];

    getPaperById(id:string):Paper{
        return this.papers.find((paper)=> paper.id===id);
    }

    createPaper(createPaperDto:CreatePaperDto){
        const {title, theme} = createPaperDto;
        const paper:Paper = {
            id: uuid(),
            title,
            theme,
        }

        this.papers.push(paper);
        return paper;
    }

    deletePaperById(id:string):void {
        this.papers.filter((paper)=> paper.id!==id);
    }

}
