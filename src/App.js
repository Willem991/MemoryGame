import React, {useEffect, useState} from "react";
import MainMenu from "./Components/mainmenu";
import TopHeading from "./Components/heade";
import Game from "./Components/game";
import Card from "./Components/card";

import Cra from "./Components/Images/Cra.webp"
import Ecaflip from "./Components/Images/Ecaflip.webp"
import Eliotrope from "./Components/Images/Eliotrope.webp"
import Eniripsa from "./Components/Images/Eniripsa.webp"
import Enutrof from "./Components/Images/Enutrof.webp"
import Feca from "./Components/Images/Feca.webp"
import Foggernaut from "./Components/Images/Foggernaut.webp"
import Huppermage from "./Components/Images/Huppermage.webp"
import Iop from "./Components/Images/Iop.webp"
import Osamodas from "./Components/Images/Osamodas.webp"
import Sacrier from "./Components/Images/Sacrier.webp"
import Sram from "./Components/Images/Sram.webp"
import uniqid from 'uniqid';

const App = () => {

  const [menuDisplay, setMenuDisplay] = useState(true);
  const [score, setScore] = useState(0);
  const [buttonClick, setButtonClick] = useState(false);
  const [name, setName] = useState('');
  const [memory, setMemory] = useState([]);
  const [message, setMessage] = useState('');

  const changeState = (aName) => {
    setButtonClick(!buttonClick);
    setName(aName);
  };

  const [displayArray, setDisplayArray] = useState([<Card changeState = {changeState} key={uniqid()} name = 'Cra' imgsrc = {Cra}></Card>, 
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Iop' imgsrc = {Iop}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Ecaflip' imgsrc = {Ecaflip}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Eliotrope' imgsrc = {Eliotrope}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Eniripsa' imgsrc = {Eniripsa}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Enutrof' imgsrc = {Enutrof}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Feca' imgsrc = {Feca}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Foggernaut' imgsrc = {Foggernaut}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Huppermage' imgsrc = {Huppermage}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Osamodas' imgsrc = {Osamodas}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Sacrier' imgsrc = {Sacrier}></Card>,
                                                    <Card changeState = {changeState} key={uniqid()} name = 'Sram' imgsrc = {Sram}></Card>, 
  ]);

  const initializeGame = () => {
    setMenuDisplay(false);
    setMemory([]);
    setName('');
    setScore(0);
    setButtonClick(false);
  };

  const shuffleArray = () => {
    let Array = displayArray;
    let currentIndex = Array.length;
    let randomIndex;

    while(currentIndex !== 0 ){
        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--;

        let placeholder = Array[currentIndex];
        Array[currentIndex] = Array[randomIndex];
        Array[randomIndex] = placeholder;
    };

    setDisplayArray(Array);
  };

  const updateScore = () => {
    setScore(score + 1);
  };

  let check = true;

  useEffect(() => {
    if(buttonClick){
  
      for (let index = 0; index < memory.length; index++) {
        if(name === memory[index]){
          check = false;
        };
      };

      if(check){
        let mem = memory;
        mem.push(name);
        setMemory(mem);
        console.log(memory);
        shuffleArray();
        updateScore();
        setButtonClick(false);
        if(memory.length === 12){
          setMessage('Congratulations! You have won!');
          setMenuDisplay(true);
        };
      }else{
        setMessage("You've Lost!")
        setMenuDisplay(true);
      }


    }
  });

  return(
    <div id='maindiv'>
      <TopHeading score = {score}></TopHeading>
      <div id='Background'>
        {(menuDisplay) ? <MainMenu message = {message} startGame = {initializeGame}></MainMenu> : <Game CharacterArray = {displayArray}></Game>}
      </div>
    </div>
  );
}; 

export default App;
