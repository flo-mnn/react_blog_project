import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons";


const SideBar = props => {

    let nRandom = Math.floor(Math.random()* props.all.articles.length);

    return(
        <div id="sidebar" className="d-flex flex-column align-items-center bg-secondary pb-5">
            <div id="social" className="w-50">
                <div className="row m-0 justify-content-around mb-3">
                    <FontAwesomeIcon icon={faFacebookF} size="2x" className="sociali"/>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="sociali"/>
                </div>
                <div className="row m-0 justify-content-around">
                    <FontAwesomeIcon icon={faPinterest} size="2x" className="sociali"/>
                    <FontAwesomeIcon icon={faYoutube} size="2x" className="sociali"/>
                </div>
            </div>
            <div className="subtitle w-100 bg-danger text-center mt-5 mb-5 py-2 d-none d-md-block">
                <span className="font-weight-bold text-light w-100">Une image,<br/>Une histoire</span>
            </div>
            <div id='decouverte' className="px-3 w-100 d-none d-md-block">
                <Link className='w-100' to={'/article/'+nRandom}>
                    <div id="random">
                        <div id="readOne" style={{backgroundImage: `url(${props.all.articles[nRandom].coverImg})`}}>
                        </div>
                    </div>
                </Link>
                        
            </div>
            <div className="subtitle w-100 bg-danger text-center mt-5 py-4">
                <span className="font-weight-bold text-light w-100">Notre petit mot</span>
            </div>
                <p className="text-center px-4 text-light my-2">
                    Ici, à ... en 80 jours, nous aimons réver de nouveaux horizons. Mais plus que rêver, nous aimons les parcourir et les partager avec tous ceux qui partagent la même passion. Le même sentiment d'excitation quand on franchit sa porte (si on en a une), le sac à dos sur l'épaule.
                </p>
            
        </div>
    );
};

export default SideBar;