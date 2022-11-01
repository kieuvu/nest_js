import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { typeormConfig } from './configs/typeorm.config';

import { UserModule } from './modules/user/user.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
