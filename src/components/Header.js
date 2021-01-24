import React, {Fragment} from 'react';
import banner from './banner.svg';


import {
    Link,
    // NavLink
  } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Header = props => {

    let toggle = (e) => {
        e.preventDefault();
        let nav = document.querySelector('#navbar-sm');
        console.log(nav);
        nav.classList.toggle('display');
    };

    return(
        <Fragment>
            <header className="d-flex justify-content-center mt-5">
                <img src={banner} alt="banner" className='w-75'/>
            </header>
            <div className='d-md-none d-flex justify-content-end mr-5 mb-5'>
                <button id="navToggle" onClick={toggle} className="btn btn-light">
                    <FontAwesomeIcon icon={faEllipsisH} />
                </button>
            </div>
            <nav id='navbar' className="d-none d-md-flex justify-content-around align-items-center mx-auto mb-5">
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
            <div id='navbar-sm' className="d-md-none col-12 justify-content-around align-items-center text-center">
                <Link to='/'>
                    <span>C'est Parti !</span>
                </Link>
                <Link to='/parcourir'>
                    <span>Découvrir</span>
                </Link>
                <Link to='/form'>
                    <span>Ton Récit</span>
                </Link>
            </div>
        </Fragment>
    );
};

export default Header;