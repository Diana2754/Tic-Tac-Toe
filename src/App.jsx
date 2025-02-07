import { useState } from 'react'
import ReactDOM from 'react-dom';
import './App.css'
import Board from './Board'
import Square from './square'
import square from './style.jsx'


export default function App(){
 
  const [turn, setTurn]= useState(true);
  
  const [square, setSquare]= useState(Array(9).fill(null));

  const [winner, setWinner]= useState(null)

  const empate= square.every(item=> item!=null)

  const newSquares = square.slice();
  

  function resetearJuego(){
    setSquare(Array(9).fill(null));
    setTurn(true);
    setWinner(null);
    

  }


  function verificarGanador(newSquare){
          const comboGanador=  [
              [0, 1, 2], 
              [3, 4, 5], 
              [6, 7, 8], 
              [0, 3, 6], 
              [1, 4, 7], 
              [2, 5, 8],
              [0, 4, 8], 
              [2, 4, 6], 
            ];
  
            for (let [a, b, c] of comboGanador){
             const combo= [a, b, c]
  
             if (newSquare[a] && newSquare[a] === newSquare[b] && newSquare[a] === newSquare[c]) {
              setWinner(newSquare[a]);
              return;
        }
      }
    }

    function finalizarPartida(winner){
      if (winner){
        return(
          <>
          <h1>El ganador es: {winner}</h1>
          <button type="button" className='start' onClick={resetearJuego}>➡️START</button>
          </>
        )
  
      }else if(empate){
        return(
          <>
          <h1>EMPATE</h1>
        <button type="button" className='start' onClick={resetearJuego}>➡️START</button>
        </>
        )
  
      }else{
        return null;
      }
    }

function cambiarTurno(index) {

  //partida()
  if (square[index] || winner) {
    finalizarPartida(winner);
  } else {
    setTurn(!turn); 

  }
}

    function partida(index){
      
        if (square[index] || winner) return; // Evita clics en celdas ocupadas o si ya hay un ganador

        const newSquares = [...square]; // Copia el estado actual del tablero
        newSquares[index] = turn ? "X" : "O"; // Asigna "X" o "O" según el turno
        setSquare(newSquares); // Actualiza el estado del tablero

        verificarGanador(newSquares); // Verifica si hay un ganador
        finalizarPartida();

        setTurn(!turn); // Alterna el turno
      }

  return(
    <>
    <h1>TIC- TAC- TOE</h1>
    <Board square={square}  partida={partida}/>

    {/* Mostrar botón si la partida ha finalizado */}
    {finalizarPartida(winner)}
  
    </>
  )
}


  




