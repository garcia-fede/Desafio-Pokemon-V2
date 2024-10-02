import { MigrationInterface, QueryRunner } from "typeorm";

export class CrearTablaPokemons1727885186289 implements MigrationInterface {
    name = 'CrearTablaPokemons1727885186289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "batalla" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "selectedPokemon" text NOT NULL, "enemyPokemon" text NOT NULL, "ganador" text NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "batalla"`);
    }

}
