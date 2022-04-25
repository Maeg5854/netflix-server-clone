import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'aowl0254mysql!',
    database: 'sys',
    entities: [__dirname+'/../**/*.entity.{ts,js}'], // 사용할 entity의 클래스명을 넣어둔다.
    synchronize: true, // false로 해두는 게 안전하다. 
};