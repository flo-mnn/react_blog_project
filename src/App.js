import React, {Component} from 'react';
import venezia from './components/Home/venice.jpg';
import istanbul from './components/Home/istanbul.jpg';
import sydney from './components/Home/sydney.jpg';
import piter from './components/Home/piter.jpg';
import newyork from './components/Home/newyork.jpg';
import kruger from './components/Home/kruger.jpg';
import Home from "./components/Home";
import Header from './components/Header';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
{/* <FontAwesomeIcon icon={faFacebook} /> */}

class App extends Component{

  
  state = {
    articles : [
      {titre: `Venezia, la belle au bord de l'eau`, coverImg: venezia, auteur: "Letizia Santina", tags: ['City Trip','Rencontres']},
      {titre: `Sydney, au coeur de l'Océanie lointaine`, coverImg: sydney, auteur: "Jack Matthew", tags: ['Off Road','Foodies']},
      {titre: `Istanbul, ô cité emplie d'Histoire`, coverImg: istanbul, auteur: "Mehtap M.",tags: ['City Trip','Foodies','Rencontres']},
      {titre: `Saint-Pétersbourg, la détermination d'un Empire`, coverImg: piter, auteur: "Nadezhda Nikolaeva",tags: ['City Trip','Foodies']},
      {titre: `New-York, le rêve américain XXL`, coverImg: newyork, auteur: "Brooke Loyd",tags: ['City Trip']},
      {titre: `Cap sur Bonne-Espérance`, coverImg: kruger, auteur: "Brooke Loyd",tags: ['Off Road','Foodies']},
    ],
    tags : ['Off Road','CityTrip','Foodies','Rencontres'],
  }

  render() {
    console.log(this.state);

    return (
      <Router>
        <div className="App w-100">
          <Header />
          <Home leState={this.state}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
