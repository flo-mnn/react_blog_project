const AlaUne = props => {


    return(

        <div id="une" className='row m-0 p-5'>
            {
                props.allArticles.map((art,index) => {
                    return (
                        <div className="carte col-12 col-md-6 mb-4" key={index}>
                            <div className="inner-col m-5 h-100">
                                <div className="preview w-100">
                                    <img src={art.coverImg} alt="articlecover" className="img-fluid"/>
                                </div>
                                <div className="text d-flex flex-column justify-content-between p-3 mt-2">
                                    <h5 className="">{art.titre}</h5>
                                    <div className="details d-flex flex-column mb-2">
                                        <span className='text-right font-italic text-danger'>par {art.auteur} </span>
                                        <span className="text-right text-secondary">22 janvier 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
       
    );
};

export default AlaUne;