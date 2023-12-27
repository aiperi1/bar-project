import React from 'react';
import {Link} from 'react-router-dom'

const IngrDetail = (props) => {
    return (
        <Link to={`/ingredient/:${props.name}`}>
            
        </Link>
    );
};

export default IngrDetail;