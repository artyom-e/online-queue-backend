import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import app from './config/app.config';
import database from './config/database.config';
import auth from './config/auth.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueuesModule } from './queues/queues.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app, database, auth],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('database.host'),
          port: configService.get<number>('database.port'),
          username: configService.get<string>('database.user'),
          password: configService.get<string>('database.password'),
          database: configService.get<string>('database.name'),
          autoLoadEntities: true,
          synchronize: configService.get<string>('app.environment') === 'local',
        };
      },
    }),
    QueuesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
