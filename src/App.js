import logo from './logo.svg';
import './App.css';
import Charatcers from "./Components/Characters/Characters";
import Top from "./Components/Top/Top"

import {getCaracters} from "./Services/character.service";

function App() {
  return (
    <div className="App">
        <Top text={'The Rick and Morty'}/>
      <Charatcers dateFunction={getCaracters}/>
    </div>
  );
}

export default App;
