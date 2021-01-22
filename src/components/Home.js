import React, {useEffect} from 'react'
import Banner from "./Home/Banner";
import Categories from './Home/Categories'
import AlaUne from './Home/AlaUne';
import SideBar from './Home/SideBar';

const Home = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div id="home">
           <Banner allArticles={props.leState.articles}/>
           <Categories tags={props.leState.tags}/>
           <div id="content" className="d-flex">
            <AlaUne allArticles={props.leState.articles} />
            <SideBar all={props.leState}/>
           </div>
        </div>
    )
};

export default Home