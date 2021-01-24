import React,{useEffect} from 'react';
import {Link} from "react-router-dom";

const Parcourir = props => {

    useEffect(() => {
        window.location = '#navbar';
      }, []);


    return(
        <div id="tous-articles" className='w-100'>
            
            <div className="tous-article-page d-flex flex-column align-items-center">
                {
                    props.leState.articles.map((art,index) => {
                        return (
                            <div className="row w-75 rounded-left my-3 text-danger" key={index}>
                                <div className="img col-12 col-md-4 p-0 m-0">
                                    <img src={art.coverImg} alt="coverImage" className=""/>
                                </div>
                                <div className="col-12 col-md-8 text px-0 ">
                                    <h5 className="py-3 bg-danger text-light px-3">{art.titre}</h5>
                                    <div className="sous-text px-3">
                                        <span>22 janvier 2021</span>
                                        <p className="text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, quaerat. Blanditiis nisi id incidunt, reprehenderit facilis voluptatibus, atque recusandae dicta aut quo inventore accusamus suscipit veniam. </p>
                                        <p className="text-secondary align-self-end m-0">{art.auteur}</p>
                                    </div>
                                    <Link to={'/article/'+index}>
                                        <button className="btn btn-danger">Lire</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Parcourir;