import { Controller, Get } from '@nestjs/common';
import { PokemonesService } from './pokemones.service';

@Controller('pokemones')
export class PokemonesController {

    constructor(private pokemonesService: PokemonesService) {}

    @Get()
    findAll(){
        return this.pokemonesService.findAll()
    }
}