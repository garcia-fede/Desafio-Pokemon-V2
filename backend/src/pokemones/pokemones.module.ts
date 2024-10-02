import { Module } from '@nestjs/common';
import { PokemonesController } from './pokemones.controller';
import { PokemonesService } from './pokemones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';

@Module({
  controllers: [PokemonesController],
  providers: [PokemonesService],
  imports:[TypeOrmModule.forFeature([Pokemon])],
  exports:[PokemonesService]
})
export class PokemonesModule {}
