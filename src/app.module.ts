import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import environment from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseService } from './services';
import { UserModule } from './v1';

@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGOD_DB),
    ConfigModule.forRoot({
      load: [() => ({ environment })],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, ResponseService],
})
export class AppModule {}
