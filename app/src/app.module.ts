import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import app from './config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
