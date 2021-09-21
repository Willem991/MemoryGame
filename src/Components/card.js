import React, {useState} from "react";
import './comp.css'

const Card = (props) => {

    const changeTheState = () => {
        props.changeState(props.name);
    };

    return(
        <div id = 'card' onClick = {changeTheState}>
            <img alt = 'Dofus Character' src = {props.imgsrc}></img>
            <p>{props.name}</p>
        </div>
    )
};

export default Card;