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
            <nav className="d-flex justify-content-around align-items-center w-50 mx-auto mb-5">
                <Link>
                    <span>C'est Parti !</span>
                </Link>
                <span>|</span>
                <Link>
                    <span>Ton Récit</span>
                </Link>
                <span>|</span>
                <Link>
                    <span>Découvrir</span>
                </Link>
            </nav>
        </Fragment>
    );
};

export default Header;