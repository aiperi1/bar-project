import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getIngredient} from "../../redux/actions/dispatchAsync";
import {clearDetails} from "../../redux/actions/dispatchActions";
import IngrDetail from "./IngrDetail";

const Ingredient = () => {

    // const [loading,setLoading]=useState(true)

    const {name}=useParams()

    const dispatch = useDispatch()

    const {ingredient}=useSelector(state=>state)
    // console.log(ingredient)

    useEffect(() => {
        dispatch(getIngredient(name))
        return ()=>{
            dispatch(clearDetails())
        }
    }, [])

    return (
        <section id='ingredient'>
            <div className="container">
                <div className="row">
                    <IngrDetail

                    />
                </div>
            </div>
        </section>
    );
};

export default Ingredient;



