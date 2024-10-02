import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('batalla')
export class Batalla {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type: "text"})
    selectedPokemon: String;

    @Column({type: "text"})
    enemyPokemon: String;

    @Column({type: "text"})
    ganador: String;
}