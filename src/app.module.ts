import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MembershipModule } from './membership/membership.module';
import { ContentModule } from './content/content.module';
import { typeORMConfig } from '../config/database'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AccountModule, MembershipModule, ContentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
