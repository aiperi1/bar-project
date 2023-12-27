import React, {useEffect,useState} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailCocktail} from "../../redux/actions/dispatchAsync";
import DetailMain from "./DetailMain/DetailMain";
import {clearDetails} from "../../redux/actions/dispatchActions";
import Loading from "../Loading/Loading";
import Ingredient from "../Ingredient/Ingredient";

const Detail = () => {

    const [loading, setLoading] = useState(true)

    const navigate= useNavigate()

    const returnToMain=()=>{
        navigate('/')
    }

    const {id} = useParams()

    const dispatch = useDispatch()

    const {detail} = useSelector(state => state)

    useEffect(() => {
        dispatch(detailCocktail(id,setLoading))
        return ()=>{
            dispatch(clearDetails())
        }
    }, [])

    const ingredient = Object.entries(detail).filter(el=>el[0].includes('strIngredient') && el[1]).map(el=>el[1])
    console.log(ingredient)

    return (
        <section id='detail'>
            <div className="container">
                <div className="row">
                    {!loading ?<DetailMain
                        key={detail.idDrink}
                        name={detail.strDrink}
                        image={detail.strDrinkThumb}
                        id={detail.idDrink}
                        ingredient={ingredient}
                        returnToMain={returnToMain}
                    />: <Loading/>}
                    <Ingredient

                    />
                </div>
            </div>
        </section>
    );
};

export default Detail;




