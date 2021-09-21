import React, {useState} from "react";
import './comp.css'

const Card = (props) => {

    return(
        <div id = 'card' >
            <img src = {props.imgsrc}></img>
            <p>{props.name}</p>
        </div>
    )
};

export default Card;