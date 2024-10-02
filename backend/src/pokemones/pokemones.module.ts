import { Module } from '@nestjs/common';
import { PokemonesController } from './pokemones.controller';
import { PokemonesService } from './pokemones.service';

@Module({
  controllers: [PokemonesController],
  providers: [PokemonesService]
})

export class PokemonesModule {}