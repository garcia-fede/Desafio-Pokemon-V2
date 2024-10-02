import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokemonesService } from './pokemones.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemones')
export class PokemonesController {

    constructor(private pokemonesService: PokemonesService) {}

    @Get()
    findAll(){
        return this.pokemonesService.findAll()
    }

    @Post()
    battlePokemons(@Body() body: { selectedPokemon: Pokemon; enemyPokemon: Pokemon }) {
        const { selectedPokemon, enemyPokemon } = body;
        return this.pokemonesService.battlePokemons(selectedPokemon,enemyPokemon)
    }
}