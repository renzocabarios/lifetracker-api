import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import environment from './config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGOD_DB),
    ConfigModule.forRoot({
      load: [() => ({ environment })],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
