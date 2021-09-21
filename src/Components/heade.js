import React from "react";
import TitleImage from './Images/TitleBG.png'
import TitleImage2 from './Images/TitleMG.png'
import TitleImage3 from './Images/TitleCG.png'
import './heade.css'; 

const TopHeading = () => {

    return(
        //Ignored
        <div id="TopHeading">
            {/*ignored*/}
            <img className="Titleimage1" width='auto' alt="Dofus" height = "250px" src={TitleImage}/>
            <img className="Titleimage2" width='auto' alt = "Memory Game" height='50px' src={TitleImage2}/>
            <img className="Titleimage3" width='auto' alt = "Character" height='200px' src={TitleImage3}/>
        </div>
    );
};

export default TopHeading;