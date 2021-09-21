import React, {useState} from "react";

const MainMenu = (props) => {

    return(
        <div>
            <p>
                Would you Like to Start a new game?
            </p>
            <button onClick = {props.startGame} id = "strtBtn">Start</button>
        </div>
    );
};

export default MainMenu;