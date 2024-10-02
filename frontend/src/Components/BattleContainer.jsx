import { Button, CardMedia, CardContent, Card, LinearProgress } from '@mui/material';
import Axios from "axios";
import React, { useEffect, useState } from 'react';

const BattleContainer = ({ selectedPokemon, pokemones }) => {
    const [enemyPokemon, setEnemyPokemon] = useState(pokemones[2]);
    const [mensajeBatalla,setMensajeBatalla] = useState("Seleccione 2 pokemones para pelear.")
    
    const [selectedFadeClass, setSelectedFadeClass] = useState('');
    const [enemyFadeClass, setEnemyFadeClass] = useState('');

    const setRandomEnemy = () => {
        const selectedPokemonIndex = pokemones.findIndex(pokemon => pokemon === selectedPokemon);
        const randomEnemy = Math.floor(Math.random() * pokemones.length);
    
        if (randomEnemy === selectedPokemonIndex) {
            return setRandomEnemy();
        } else {
            const enemy = pokemones[randomEnemy];
            setEnemyPokemon(enemy);
            return enemy;
        }
    }


    const startBattle = () => {
        const newEnemy = setRandomEnemy();
        setMensajeBatalla("Cargando batalla...")
        setTimeout(()=>{
            Axios.post("http://localhost:3001/pokemones", {
                selectedPokemon: selectedPokemon,
                enemyPokemon: newEnemy
            }).then((result) => {
                console.log("Éxito: Se enviaron los pokemones ", selectedPokemon, " y ", newEnemy, " con éxito");
                console.log("Resultado de la batalla:", result);
                setMensajeBatalla("El ganador de la batalla es " + result.data.ganador + "!");
            }).catch((e) => {
                console.log("Error: No se pudo enviar los pokemones");
                console.log(e);
            }).finally(() => {
                console.log("Fin del post");
            });
        },1500)
    }

    // Elegir un enemigo aleatorio al cargar la página/actualizar los pokemones
    useEffect(() => {
        setRandomEnemy();
    }, [pokemones]);

    // Activar animaciones cuando cambia el pokemon
    useEffect(() => {
        setSelectedFadeClass('fade');
        const timeout = setTimeout(() => {
            setSelectedFadeClass('');
        }, 500);

        return () => clearTimeout(timeout);
    }, [selectedPokemon]);

    useEffect(() => {
        setEnemyFadeClass('fade');
        const timeout = setTimeout(() => {
            setEnemyFadeClass('');
        }, 500);

        return () => clearTimeout(timeout);
    }, [enemyPokemon]);

    return (
        <>
            <div className='battleResultContainer'>
                <p>{mensajeBatalla}</p>
            </div>
            <div className="battleContainer">
                <Card id='selectedPokemon' className={`battlePokemon selectedPokemon ${selectedFadeClass}`}>
                    <CardMedia
                        component="img"
                        alt={selectedPokemon.name}
                        image={selectedPokemon.imageUrl}
                    />
                    <CardContent>
                        <h2>{selectedPokemon.name}</h2>
                        <p>HP</p>
                        <LinearProgress sx={{ height: 10, borderRadius: 10 }} variant="determinate" value={selectedPokemon.hp * 10} />
                        <p>ATTACK</p>
                        <LinearProgress sx={{ height: 10, borderRadius: 10 }} variant="determinate" value={selectedPokemon.attack * 10} />
                        <p>DEFENSE</p>
                        <LinearProgress sx={{ height: 10, borderRadius: 10 }} variant="determinate" value={selectedPokemon.defense * 10} />
                        <p>SPEED</p>
                        <LinearProgress sx={{ height: 10, borderRadius: 10 }} variant="determinate" value={selectedPokemon.speed * 10} />
                    </CardContent>
                </Card>
                <Button
                    className='startButton'
                    onClick={() => { startBattle() }}
                    variant="contained"
                    color="success"
                    style={{ height: 'fit-content' }}>
                    Start Battle
                </Button>
                {enemyPokemon && (
                    <Card className={`battlePokemon enemyPokemon ${enemyFadeClass}`}>
                        <CardMedia
                            component="img"
                            alt={enemyPokemon.name}
                            image={enemyPokemon.imageUrl}
                        />
                        <CardContent>
                            <h2>{enemyPokemon.name}</h2>
                            <p>HP</p>
                            <LinearProgress sx={{ height: 10, borderRadius: 10 }} variant="determinate" value={enemyPokemon.hp * 10} />
                            <p>ATTACK</p>
                            <LinearProgress sx={{ height: 10, borderRadius: 10 }} variant="determinate" value={enemyPokemon.attack * 10} />
                            <p>DEFENSE</p>
                            <LinearProgress sx={{ height: 10, borderRadius: 10 }} variant="determinate" value={enemyPokemon.defense * 10} />
                            <p>SPEED</p>
                            <LinearProgress sx={{ height: 10, borderRadius: 10 }} variant="determinate" value={enemyPokemon.speed * 10} />
                        </CardContent>
                    </Card>
                )}
            </div>
        </>
    );
}

export default BattleContainer;
