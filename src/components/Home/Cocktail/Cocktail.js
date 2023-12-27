import React from 'react';
import './Cocktail.css'
import {Link} from "react-router-dom";

const Cocktail = (props) => {
    return (
        <Link to={`/detail/${props.id}`} className='col-3' >
            <div className="cocktail__box">
                <img src={props.image} alt=""/>
                <h3>{props.name}</h3>
            </div>
        </Link>
    );
};

export default Cocktail;