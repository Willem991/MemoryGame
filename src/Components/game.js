import React, {useState} from "react";
import Card from "./card";

import Cra from "./Images/Cra.webp"
import Ecaflip from "./Images/Ecaflip.webp"
import Eliotrope from "./Images/Eliotrope.webp"
import Eniripsa from "./Images/Eniripsa.webp"
import Enutrof from "./Images/Enutrof.webp"
import Feca from "./Images/Feca.webp"
import Foggernaut from "./Images/Foggernaut.webp"
import Huppermage from "./Images/Huppermage.webp"
import Iop from "./Images/Iop.webp"
import Osamodas from "./Images/Osamodas.webp"
import Sacrier from "./Images/Sacrier.webp"
import Sram from "./Images/Sram.webp"
import uniqid from 'uniqid';



const Game = (props) => {

    const [displayArray, setDisplayArray] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    let CharacterArray = [<Card key={uniqid()} name = 'Cra' imgsrc = {Cra}></Card>, 
                            <Card key={uniqid()} name = 'Iop' imgsrc = {Iop}></Card>,
                            <Card key={uniqid()} name = 'Ecaflip' imgsrc = {Ecaflip}></Card>,
                            <Card key={uniqid()} name = 'Eliotrope' imgsrc = {Eliotrope}></Card>,
                            <Card key={uniqid()} name = 'Eniripsa' imgsrc = {Eniripsa}></Card>,
                            <Card key={uniqid()} name = 'Enutrof' imgsrc = {Enutrof}></Card>,
                            <Card key={uniqid()} name = 'Feca' imgsrc = {Feca}></Card>,
                            <Card key={uniqid()} name = 'Foggernaut' imgsrc = {Foggernaut}></Card>,
                            <Card key={uniqid()} name = 'Huppermage' imgsrc = {Huppermage}></Card>,
                            <Card key={uniqid()} name = 'Osamodas' imgsrc = {Osamodas}></Card>,
                            <Card key={uniqid()} name = 'Sacrier' imgsrc = {Sacrier}></Card>,
                            <Card key={uniqid()} name = 'Sram' imgsrc = {Sram}></Card>, 
                        ];

    const shuffleArray = (array) => {
        let Array = array;
        let currentIndex = Array.length;
        let randomIndex;

        while(currentIndex != 0 ){
            randomIndex = Math.floor(Math.random()*currentIndex)
            currentIndex--;

            let placeholder = Array[currentIndex];
            Array[currentIndex] = Array[randomIndex];
            Array[randomIndex] = placeholder;
            
        };
        console.log(Array);
        return(Array);
    };

    return(
        <div id='GamePage'>
            {shuffleArray(CharacterArray)}
        </div>
    );
};

export default Game;