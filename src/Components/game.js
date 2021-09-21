import React, {useState} from "react";

const Game = (props) => {

    return(
        <div id='GamePage'>
            {props.CharacterArray}
        </div>
    );
};

export default Game;