import React, {Component} from 'react';
import Home from "./components/Florence";
import venezia from './components/Home/venice.jpg';
import istanbul from './components/Home/istanbul.jpg';
import sydney from './components/Home/sydney.jpg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
{/* <FontAwesomeIcon icon={faFacebook} /> */}

class App extends Component{

  
  state = {
    articles : [
      {titre: `Venezia, la belle au bord de l'eau`, coverImg: venezia, auteur: "Letizia Santina", tags: ['City-Trip','Rencontres']},
      {titre: `Sydney, au coeur de l'Océanie lointaine`, coverImg: sydney, auteur: "Jack Matthew", tags: ['Off-Road','Foodies']},
      {titre: `Istanbul, ô cité emplie d'Histoire`, coverImg: istanbul, auteur: "Mehtap M.",tags: ['City-Trip','Foodies','Rencontres']},
    ],
    tags : ['Off Road','City Trip','Foodies','Rencontres'],
  }

  render() {
    console.log(this.state);

    return (
      <div className="App w-100">
        <Home leState={this.state}/>
      </div>
    );
  }
}

export default App;
