import React, {useEffect, useState} from 'react';
import './Home.css'
import Form from "../Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {getAllCocktails, getCategory, searchCocktail} from "../../redux/actions/dispatchAsync";
import Cocktail from "./Cocktail/Cocktail";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import {checkState, clearPaginate, paginateNum} from "../../redux/actions/dispatchActions";
import Pagination from '../Pagination/Pagination'
import PaginationMUI from "../PaginationMUI/PaginationMUI";

const Home = () => {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const {cocktails} = useSelector(state => state)
    const {currentPage,postPerPage}=useSelector(state=>state.pagination)

    const indexOfLastPost = currentPage * postPerPage // 1*5 = 5
    const indexOfFirstPost = indexOfLastPost - postPerPage // 5-5 = 10
    const currentPosts = cocktails && cocktails.slice(indexOfFirstPost,indexOfLastPost)

    const getAllCocktailsUI = (value='Cocktail') => {
        dispatch(getAllCocktails(setLoading, value))
    }

    const getCategoryUI = (value) => {
        dispatch(getCategory(setLoading,value))
    }

    const searchCocktailsUI=(value)=>{
        dispatch(searchCocktail(setLoading,value))
    }

    useEffect(() => {
        const option=localStorage.getItem('option')
        switch(option){
            case 'Alcoholic':
            case 'Non_Alcoholic':
                getCategoryUI(option)
                break
            case 'Ordinary_Drink':
            case 'Cocktail':
                getAllCocktailsUI(option)
                break
            case option:
                !option?getAllCocktailsUI():searchCocktailsUI(option)
                break
            default:
                getAllCocktailsUI()
        }
    }, [])

    const handleSelect = (e) => {
        const value = e.target.value
        dispatch(clearPaginate())
        dispatch(paginateNum(1))
        dispatch(checkState(value))
        value === 'Alcoholic' || value === 'Non_Alcoholic' ? getCategoryUI(value) : getAllCocktailsUI(value)
        localStorage.setItem('option',value)
    }

    const listCocktail = currentPosts && currentPosts.map(el => <Cocktail
        key={el.idDrink}
        name={el.strDrink}
        image={el.strDrinkThumb}
        id={el.idDrink}
    />)

    return (
        <section id='home'>
            <Header/>
            <div className="container">

                <Form
                    getAllCocktailsUI={getAllCocktailsUI}
                    searchCocktailsUI={searchCocktailsUI}
                />

                <Categories
                    handleSelect={handleSelect}
                />

                {/*{cocktails && <Pagination*/}
                {/*    totalPosts={cocktails.length}*/}
                {/*    currentPage={currentPage}*/}
                {/*    postPerPage={postPerPage}*/}
                {/*/>}*/}

                {cocktails && <PaginationMUI
                    totalPosts={cocktails.length}
                    currentPage={currentPage}
                    postPerPage={postPerPage}
                />}

                <div className="row">
                    {!loading ? listCocktail : <Loading/>}
                    {!cocktails && <h2 onClick={()=>getAllCocktailsUI()}>Bar is empty!</h2>}
                </div>

            </div>
        </section>
    );
};

export default Home;
