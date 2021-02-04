import React from 'react';

const ArticleAuthor = props => {
    return(
        <section className="container my-5 p-5">
        <div className="d-flex flex-column align-items-center text-center">
            <div className="w-25">
                <img src={props.article.author} alt="author" className="rounded-circle img-fluid"/>
            </div>
            <span className="text-danger">{props.article.auteur}</span>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolor?</p>
        </div>
    </section>
    );
}; 

export default ArticleAuthor;