import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import DBModule from './configs/db';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    DBModule(),
    UserModule,
  ],
})
export class AppModule {}
