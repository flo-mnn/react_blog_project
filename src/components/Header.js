import React, {Fragment} from 'react';
import banner from './banner.svg';


import {
    Link,
    NavLink
  } from "react-router-dom";

const Header = props => {

    return(
        <Fragment>
            <header className="d-flex justify-content-center mt-5">
                <img src={banner} alt="banner" className='w-75'/>
            </header>
            <nav id='navbar' className="d-flex justify-content-around align-items-center w-50 mx-auto mb-5">
                <Link to='/'>
                    <span>C'est Parti !</span>
                </Link>
                <span>|</span>
                <Link to='/parcourir'>
                    <span>Découvrir</span>
                </Link>
                <span>|</span>
                <Link to='/form'>
                    <span>Ton Récit</span>
                </Link>
            </nav>
        </Fragment>
    );
};

export default Header;