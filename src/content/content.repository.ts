import { NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateContentDto } from "./dto/create-content.dto";
import { Content } from './entity/content.entity'
import { ContentStatus } from "./enum/ContentStatus.enum";

@EntityRepository(Content)
export class ContentRepository extends Repository<Content>{
    async onCreate(createContentDto: CreateContentDto): Promise<boolean> {
        const {title, year, description, thumbnail, openDate} = createContentDto;
        const user = await this.save({
            title,
            year,
            description,
            thumbnail,
            openDate,
            status: ContentStatus.OPEN
        })
        return user ? true : false;
    }
    
    async findByName(name: string) {
        return await this.query(name);
    }
}