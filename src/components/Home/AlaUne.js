import {Link} from "react-router-dom";

const AlaUne = props => {


    return(

        <div id="une" className="" >
            <h1 className="text-center font-italic p-3 bg-danger text-light">À la Une</h1>
            <div className='row m-0 px-lg-5'>
                {
                    props.allArticles.map((art,index) => {
                        return (
                            <div className="carte col-12 col-lg-6 mb-4 mb-md-2 mb-lg-4 text-light" key={index}>
                                <div className="inner-col m-md-5  d-flex flex-column align-content-center justify-content-between">
                                    <div className="preview w-100">
                                        <img src={art.coverImg} alt="articlecover" className="img-fluid"/>
                                    </div>
                                    <div className="text d-flex flex-column justify-content-between p-3 mt-2">
                                        <span className='font-weight-bold'>{art.tags.map(tag => ' - ' + tag )} -</span>
                                        <h5 className="">{art.titre}</h5>
                                        <div className="details d-flex flex-column">
                                            <span className='text-right font-italic'>par {art.auteur} </span>
                                            <span className="date text-right">22 janvier 2021</span>
                                        </div>
                                    </div>
                                    <Link to={'/article/'+index} className="w-100">
                                        <button className='w-100 btn btn-danger font-weight-bolder border border-danger  rounded-0 px-3'>Lire</button>
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

export default AlaUne;