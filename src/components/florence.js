import React, {Fragment} from 'react'
import Banner from "./Home/Banner";
import Categories from './Home/Categories'

const Home = props => {
    // console.log(props.allArticles[0].coverImg);
    return(
        <div id="home">
           <Banner allArticles={props.leState.articles}/>
           <Categories tags={props.leState.tags}/>
        </div>
    )
};

export default Home