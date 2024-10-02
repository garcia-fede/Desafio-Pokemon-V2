import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('pokemon')
export class Pokemon {
    @PrimaryColumn( {type: "text"} )
    id: string
    @Column( {type: "text"} )
    name: string
    @Column( {type: "int"} )
    attack: number
    @Column( {type: "int"} )
    defense: number
    @Column( {type: "int"} )
    hp: number
    @Column( {type: "int"} )
    speed: number
    @Column( {type: "text"} )
    type: string
    @Column( {type: "text"} )
    imageUrl: string
}