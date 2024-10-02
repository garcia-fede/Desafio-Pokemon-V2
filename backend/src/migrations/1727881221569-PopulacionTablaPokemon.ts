import * as fs from 'fs';
import * as path from 'path';
import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulacionTablaPokemon1727881221569 implements MigrationInterface {
    name = 'PopulacionTablaPokemon1727881221569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "pokemon" ("id" text PRIMARY KEY NOT NULL, "name" text NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "type" text NOT NULL, "imageUrl" text NOT NULL)`);
        //Se requiere leer el pokemon.JSON e insertarlo en la DB en una migración
        const filePath = path.join(__dirname, '../../src/pokemones/pokemon.json');
        
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const pokemones = JSON.parse(fileContent);

        for (const pokemon of pokemones.pokemon) {
            //Verificar si hay algun pokemon cuyo nombre se repita, va a retornar un array (Se puede definir un booleano con la longitud del array)
            const checkRepeat = await queryRunner.query(
                `SELECT 1 FROM pokemon WHERE name = ?`,[pokemon.name] 
            )

            const pokemonExists : boolean = checkRepeat.length > 0

            if(pokemonExists) {
                //Si existe, no insertar a la tabla
                continue;
            } else {
                //Si no existe, insertarlo a la tabla
                await queryRunner.query(
                    `INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [pokemon.id, pokemon.name, pokemon.attack, pokemon.defense, pokemon.hp, pokemon.speed, pokemon.type, pokemon.imageUrl]
                );
            }
        }
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
