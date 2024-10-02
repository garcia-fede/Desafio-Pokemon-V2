import { Module } from '@nestjs/common';
import { PokemonesController } from './pokemones.controller';
import { PokemonesService } from './pokemones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { Batalla } from './batalla.entity';

@Module({
  controllers: [PokemonesController],
  providers: [PokemonesService],
  imports:[TypeOrmModule.forFeature([Pokemon,Batalla])],
  exports:[PokemonesService]
})
export class PokemonesModule {}
