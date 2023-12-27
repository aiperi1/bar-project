import React from 'react';
import Button from '@mui/material/Button'
import './DetailMain.css'

const DetailMain = (props) => {
    return (
        <>
            <div className='col-6'>
                <div className="first__box">
                    <img src={props.image} alt=""/>
                    <h2>{props.name}</h2>
                </div>
            </div>
            <div className='col-6'>
                <div className="second__box">
                    <div className="row">
                        {props.ingredient && props.ingredient.map((el, index) => {
                            return (
                                <div key={index} className="col-3">
                                    <div className="ingredient__box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${el}-Small.png`}
                                             alt=""/>
                                        <p>{el}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                        <Button
                            onClick={props.returnToMain}
                            variant="contained"
                        >Go Back</Button>
                </div>
            </div>
        </>
    );
};

export default DetailMain;

