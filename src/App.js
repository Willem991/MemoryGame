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

  const changeButton = () => {
    setButtonClick(!buttonClick);
  };

  const [displayArray, setDisplayArray] = useState([<Card changeButton = {changeButton} key={uniqid()} name = 'Cra' imgsrc = {Cra}></Card>, 
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Iop' imgsrc = {Iop}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Ecaflip' imgsrc = {Ecaflip}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Eliotrope' imgsrc = {Eliotrope}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Eniripsa' imgsrc = {Eniripsa}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Enutrof' imgsrc = {Enutrof}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Feca' imgsrc = {Feca}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Foggernaut' imgsrc = {Foggernaut}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Huppermage' imgsrc = {Huppermage}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Osamodas' imgsrc = {Osamodas}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Sacrier' imgsrc = {Sacrier}></Card>,
                                                    <Card changeButton = {changeButton} key={uniqid()} name = 'Sram' imgsrc = {Sram}></Card>, 
  ]);

  const initializeGame = () => {
    setMenuDisplay(false);
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

  const updateScoreandArray = () => {
    shuffleArray();
    updateScore();
    console.log("I am running");
  };

  useEffect(() => {
    if(buttonClick){
      shuffleArray();
      updateScore();
      setButtonClick(false);
    }
  });

  return(
    <div>
      {console.log(buttonClick)}
      <TopHeading></TopHeading>
      {(menuDisplay) ? <MainMenu startGame = {initializeGame}></MainMenu> : <Game CharacterArray = {displayArray}></Game>}
    </div>
  );
}; 

export default App;
