import {Link} from "react-router-dom";

const Banner = props => {


    return (
        <div id="banner" className='d-flex justify-content-center w-100'>
            <div id="carouselBanner" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='inner-banner d-flex justify-content-center align-items-center w-100'>
                        <div className="voile position-absolute-center w-100 h-100">
                            <img src={props.allArticles[0].coverImg} alt="venise" className="position-absolute-center"/>
                        </div>
                        <div className='inner-text w-50 position-absolute text-center text-light'>
                            <h1>{props.allArticles[0].titre}</h1>
                            <h5>by {props.allArticles[0].auteur}</h5>
                            <Link to="/article/0">
                                <button className="read btn btn-secondary rounded-0 px-5 py-2">Lire</button>
                            </Link>
                        </div>
                    </div>
                     
                </div>
                <div className="carousel-item">
                    <div className='inner-banner d-flex justify-content-center align-items-center w-100'>
                        <div className="voile position-absolute-center w-100 h-100">
                            <img src={props.allArticles[1].coverImg} alt="venise" className="position-absolute-center"/>
                        </div>
                        <div className='inner-text w-50 position-absolute text-center text-light'>
                            <h1>{props.allArticles[1].titre}</h1>
                            <h5>by {props.allArticles[1].auteur}</h5>
                            <Link to="/article/1">
                                <button className="read btn btn-secondary rounded-0 px-5 py-2">Lire</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='inner-banner d-flex justify-content-center align-items-center w-100'>
                        <div className="voile position-absolute-center w-100 h-100">
                            <img src={props.allArticles[2].coverImg} alt="venise" className="position-absolute-center"/>
                        </div>
                        <div className='inner-text w-50 position-absolute text-center text-light'>
                            <h1>{props.allArticles[2].titre}</h1>
                            <h5>by {props.allArticles[2].auteur}</h5>
                            <Link to="/article/2">
                                <button className="read btn btn-secondary rounded-0 px-5 py-2">Lire</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselBanner" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselBanner" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>        
    )
};

export default Banner