// src/data-source.ts
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'pokemondb.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: false,
    migrationsRun: true
});
