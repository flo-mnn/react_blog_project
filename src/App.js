import React, {Component, Fragment} from 'react';
import venezia from './components/Home/venice.jpg';
import istanbul from './components/Home/istanbul.jpg';
import sydney from './components/Home/sydney.jpg';
import piter from './components/Home/piter.jpg';
import newyork from './components/Home/newyork.jpg';
import kruger from './components/Home/kruger.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Parcourir from './components/Parcourir';
import Form from './components/Form';
import Article from './components/Article';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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

  toTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {

    return (
      <Fragment>
            <button id='toTop' className="btn btn-danger position-sticky" onClick={this.toTop}>
              <FontAwesomeIcon icon={faArrowUp}/>
            </button>
        <Router>
          <div className="App w-100">
            <Header />
            <Switch>
              <Route path="/parcourir">
                <Parcourir leState={this.state} />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              {
                this.state.articles.map( (elem,index)=> {return(
                  <Route path={'/article/'+index} key={index}>
                    <Article article={elem}/>
                  </Route>
                )})
              }
              <Route path="/">
                <Home leState={this.state}/>
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
