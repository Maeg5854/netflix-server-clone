import { Body, Controller, Get, Post, UploadedFile, UseInterceptors, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { Content } from './entity/content.entity';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('content')
export class ContentController {
    constructor(private contentService: ContentService){}

    @Get('/browse')
    async getContent(
        @Res() res:Response
        ) {
        try{
            const contents = await this.contentService.getAllContents()
            
            if (!contents) {
                return res.status(204).json({
                    isSuccess: true,
                    message : "현재 콘텐츠가 존재하지 않습니다."
                })
            } 
            return res.status(200).json({
                isSuccess : true,
                message : "콘텐츠들을 성공적으로 불러왔습니다.",
                result : contents
            })    
        } catch (e) {
            return res.status(500).json({
                isSuccess : false,
                message : "Internal Server Error."
            })  
        }        
    }
    /**
     * 새 콘텐츠 생성
     * @param createContentDto 
     * @returns 
     */
    @Post('/new')
    createContent(
        @Body() createContentDto:CreateContentDto,
        @Res() res: Response
    ) : void {
        
        try{
            this.contentService.createContent(createContentDto)
            res.status(200).json({
                success: true,
                message: "콘텐츠가 성공적으로 생성되었습니다."
            });
        } catch (e) {
            console.log(e);
            res.status(300).json({
                success: false,
                message: "Internal Server error"
            });
        }
    }

    @Post('/new/image')
    @UseInterceptors(FileInterceptor('file'))
    createContentImage(
        @UploadedFile() file: Express.Multer.File,
        @Res() res:Response
    ){
        
        console.log(file);
        res.status(HttpStatus.OK).json({
            success: true,
            data: file
        });
    }
}
