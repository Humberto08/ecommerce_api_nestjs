import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { AddressModule } from './address/address.module';
import { CityModule } from './city/city.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    
    UserModule,
    
    StateModule,
    
    AddressModule,
    
    CityModule,
    
    CacheModule,
    
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
