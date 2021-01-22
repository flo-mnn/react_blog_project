import React,{useEffect} from 'react';


const Article = props => {

    useEffect(() => {
        window.location = '#article';
      }, []);

    
    return(
        <div className="article d-flex flex-column align-items-center" id='article'>
            <h1>{props.article.titre}</h1>
            <img src={props.article.coverImg} alt="" className="w-75"/>
            <span>{props.article.auteur}</span>
            <span>22 janvier 2021</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ut? Eos, labore velit, alias inventore commodi corrupti magni quisquam id consequatur sed eligendi ipsum nemo fugit beatae. Tenetur, aliquid corrupti.</p>
        </div>
    );
};
export default Article