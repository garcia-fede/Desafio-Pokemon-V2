import { MigrationInterface, QueryRunner } from "typeorm";

export class TablaPokemon1727880923001 implements MigrationInterface {
    name = 'TablaPokemon1727880923001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" text PRIMARY KEY NOT NULL, "name" text NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "type" text NOT NULL, "imageUrl" text NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
