import React, {useState} from "react";
import MainMenu from "./Components/mainmenu";
import TopHeading from "./Components/heade";
import Game from "./Components/game";

const App = () => {

const [menuDisplay, setMenuDisplay] = useState(true);

const initializeGame = () => {
  setMenuDisplay(false);
};

  return(
    <div>
      <TopHeading></TopHeading>
      {(menuDisplay) ? <MainMenu startGame = {initializeGame}></MainMenu> : <Game></Game>}
    </div>
  );
}; 

export default App;
