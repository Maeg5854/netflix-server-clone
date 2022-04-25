import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Content } from './entity/content.entity';
import { CreateContentDto } from './dto/create-content.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentRepository } from './content.repository';

@Injectable()
export class ContentService {
    // 콘텐츠 레포지토리 주입
    constructor(
        @InjectRepository(ContentRepository) private contentRepository: ContentRepository,
    ){}

    // C
    createContent(createContentDto: CreateContentDto) : Promise<boolean> {
        return this.contentRepository.onCreate(createContentDto);
    };

    // R
    /**
     * 
     * @returns 
     */
    getAllContents() : Promise<Content[]> {
        return this.contentRepository.find();
    }

    getContentById(id : number) : Promise<Content> {
        return this.contentRepository.findOne();
    }

    /*

    getContentsByGenre() : Content[] {

    }
    
    getContentsByActor() : Content[] {

    }

    getContentsByCharateristic() : Content[] {

    }

    // U
    updateContent() : Content {

    }

    // D
    deleteContent() : void {
    
    }
    */

}
