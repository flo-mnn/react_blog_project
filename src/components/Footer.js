import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = props => {
    return(
        <footer className=" bg-secondary">
            
            <div id="subscribe" className="row mx-0 align-items-center px-5">
                <div className="col-12 col-md-4  justify-content-center"><span className="inscris font-italic font-weight-bolder text-light">Inscris toi à notre Newsletter</span></div>
                <div className="col-12 col-md-8 justify-content-around">
                    <form action="" className="w-100">
                        <input id="email" type="email" placeholder="ilovetotravel@world.com" className="p-2 border-0"/>
                        <input id="submit" type="submit" value="Je veux rêver" className="btn btn-danger rounded-0 ml-5 mr-3 py-2 px-4"/>
                        <svg id="plane" width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="plane" d="M28.2748 28.8164L20.2629 23.5646L12.0313 28.6874C11.8482 28.8248 11.5878 28.9089 11.2989 28.9089C10.7496 28.9089 10.3061 28.6033 10.3061 28.2247V17.0397L0.308517 10.4897C-0.0902463 10.2289 -0.102453 9.79709 0.271895 9.5223C0.398035 9.42977 0.556726 9.36808 0.723555 9.33443L48.7379 0.025268C49.2668 -0.0756747 49.8121 0.134623 49.9626 0.499138C50.0399 0.6842 49.9952 0.87487 49.865 1.02909L29.8454 28.6257C29.6013 28.9622 29.0072 29.0996 28.519 28.9313C28.4254 28.9005 28.344 28.8612 28.2748 28.8164ZM18.8225 22.6224L12.2917 18.3436V26.6882L18.8225 22.6224ZM11.4535 15.9069L42.5082 2.65539L2.9371 10.327L11.4535 15.9069ZM46.5609 2.53201L12.9347 16.8771L28.6695 27.1901L46.5609 2.53201Z"/>
                        </svg>
                    </form>
                </div>
            </div>
            <div id="write" className="d-flex align-items-center justify-content-end p-5 px-5">
                <p className="m-0 font-italic text-light">Fais rêver à ton tour et publie ton récit de voyage</p>
                <Link to='/form'>
                    <button className="btn btn-danger py-2 px-3 mx-2 "><FontAwesomeIcon icon={faEnvelope} /> </button>
                </Link>
            </div>
            <div id="copyright" className='text-center p-5 bg-danger text-light'>
                <span>- Copyright 2021 - ... en 180 jours -</span>
            </div>
        </footer>
    );
};

export default Footer;