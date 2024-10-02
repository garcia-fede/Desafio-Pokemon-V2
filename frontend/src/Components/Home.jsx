import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Axios from "axios";
import { Container } from '@mui/material';
import BattleContainer from './BattleContainer';

const PokemonList = () => {
    
    const [pokemones,setPokemons] = useState([])
    const [pokemon,setPokemon] = useState({})

    const getPokemons = ()=>{
        Axios.get("http://localhost:3001/pokemones")
        .then((response) => {
            console.log("GET Exitoso, pokemones guardados.")
            setPokemons(Array.from(response.data));
            setPokemon(Array.from(response.data)[0])
            console.log(response.data)
        })
        .catch((error) => {
            console.log("Error al realizar el GET")
            console.error(error);
        })
        .finally(() => {
            console.log("Proceso finalizado")
        });
    }

    useEffect(()=>{
        getPokemons()
    },[])


    return (
        <Container maxWidth="md">
            <div className="header">
                <h1>Battle of pokemon</h1>
                <h2>Select your pokemon</h2>
            </div>
            <div className='pokemonContainer'>
                {pokemones.map((pokemon,index)=>{
                    return (
                        <Card onClick={()=>{setPokemon(pokemon)}} className='pokemonCard' key={index}> 
                            <CardContent>
                                <img src={pokemon.imageUrl} alt={pokemon.name} />
                                <h2>{pokemon.name}</h2>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            <BattleContainer selectedPokemon={pokemon} pokemones={pokemones} />
        </Container>

    )
}

export default PokemonList