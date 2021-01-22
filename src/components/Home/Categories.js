import React, {useState} from 'react';
import offroad from "./offroad.jpg";
import citytrip from "./citytrip.jpg";
import foodies from "./foodies.jpg";
import people from "./people.jpg";

const Categories = props => {
    
    const [bg, setBg] = useState([offroad,citytrip,foodies,people]);

    console.log(bg);
    return (
        <div className="row m-0" id="categories">
            {
                props.tags.map((elem,index)=> {
                    return(
                        <div key={index} className="col-12 col-md-6 col-lg-3 m-0 d-flex justify-content-center align-items-center text-center" >
                            <div className="inner-col d-flex justify-content-center align-items-center text-center" style={{backgroundImage: `url(${bg[index]})`}}>
                                <h1 className='text-light px-3 py-5 border'>{elem}</h1>
                            </div>
                        </div>
                    )
                } )
            }
        </div>
    );

};

export default Categories