import React, {useState} from "react";
import './comp.css'

const Card = (props) => {

    return(
        <div id = 'card' onClick = {props.changeButton}>
            <img alt = 'Dofus Character' src = {props.imgsrc}></img>
            <p>{props.name}</p>
        </div>
    )
};

export default Card;