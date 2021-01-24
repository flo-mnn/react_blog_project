import React,{useEffect} from 'react';

const Form = props => {

    useEffect(() => {
        window.location = '#navbar';
      }, []);

    
    return(
        <div id='form' className="w-100 d-flex flex-column align-items-center">
            
            <h1 className="w-100 p-4 bg-danger text-light text-center mb-3">Fais rêver</h1>
            <div className="text text-center mb-5 p-5 border-bottom border-danger d-flex justify-content-center text-danger font-italic">
                <p className="w-75">Toi aussi, fais nous rêver et voyager entre deux avions, à nos arrêts de bus, à notre pause café au boulot. Partage tes plus beaux souvenirs, fais gratter la plume sur le parchemin !</p>
            </div>
            <form action="" id="write-to-us"  className="w-75">
                <div className="row  mx-0 justify-content-between w-100 mb-5">
                    <input type="text" id="name" name="nom" placeholder="Prénom et Nom" className="p-3 text-danger" autoFocus required/>
                    <input type="email" id="email" name="email" placeholder="ilovetotravel@world.com" className="p-3 text-danger" required/>
                </div>
                <div className="row mx-0 w-100 mb-5">
                    <textarea name="recit" id="recit" rows="10" className="w-100 text-danger p-3" required defaultValue="Cher ...en 180 jours,">
                        
                    </textarea>
                </div>
                <div className="row mx-0 w-100">
                    <label htmlFor="file" className='btn btn-danger rounded-0 px-4' >Choisir une image</label>
                    <input id="file" type="file" required/>
                </div>
                <div className="row mx-0 w-100 justify-content-md-end mb-5">
                   <input type="submit" value="Envoyer" id='send' className="btn btn-danger rounded-0 px-4 mr-md-5"/>
                </div>

            </form>
        </div>
    );
};

export default Form