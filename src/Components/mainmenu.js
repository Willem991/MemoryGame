import React, {useState} from "react";
import "./Images/button.png"
import "./comp.css"

const MainMenu = (props) => {

    return(
        <div id = 'maindiv'>
            <p>{props.message}</p>
            <p id='newGameMessage'>
                Would you like to Start a new game?
            </p>
            <button onClick = {props.startGame} id = "strtBtn">Start</button>
        </div>
    );
};

export default MainMenu;