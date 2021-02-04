import React from 'react';

const ArticleHeader = props => {

    return(
        <section className="container">
            <img src={props.article.coverImg} alt="coverImg" className="w-100"/>
            <div className="d-flex flex-column align-items-center my-5 p-5 bg-secondary rounded-top">
                <h1 className="text-white">{props.article.titre}</h1>
                <h5 className="text-danger">{props.article.auteur}</h5>
                <span className="text-light align-self-end">22 Janvier 2021</span>
            </div>
        </section>
    );


}

export default ArticleHeader;