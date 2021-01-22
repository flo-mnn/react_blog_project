const Banner = props => {


    return (
        <div id="banner" className='d-flex justify-content-center'>
            <div className='inner-banner d-flex justify-content-center align-items-center'>
                <div className="voile position-absolute-center w-100 h-100">
                    <img src={props.allArticles[0].coverImg} alt="venise" className="position-absolute-center"/>
                </div>
                <div className='inner-text w-50 position-absolute text-center text-light'>
                    <h1>{props.allArticles[0].titre}</h1>
                    <h5>by {props.allArticles[0].auteur}</h5>
                    <button className="read btn btn-secondary rounded-0">Lire</button>
                </div>
            </div>
        </div>
    )
};

export default Banner