// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonesModule } from './pokemones/pokemones.module';
import { PokemonesController } from './pokemones/pokemones.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemondb.sqlite', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false, 
      migrationsRun: true, 
    }),
    PokemonesModule
  ],
  controllers: [AppController, PokemonesController],
  providers: [AppService],
})
export class AppModule {}
