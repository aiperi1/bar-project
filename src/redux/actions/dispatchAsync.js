import axios from "axios";
import {
    GET_ALL_COCKTAILS,
    GET_CATEGORY,
    GET_DETAIL_BY_ID,
    SEARCH_COCKTAILS_BY_NAME,
    SEARCH_INGREDIENT_BY_NAME
} from "../../config";
import {GET_CATEGORIES, LIST_COCKTAILS, LIST_DETAIL, LIST_SEARCH, SEARCH_INGREDIENT} from "./type";

export const getAllCocktails = (setLoading,value) => async (dispatch) => {
    const res = await axios.get(GET_ALL_COCKTAILS+value)
    setLoading(false)
    dispatch({
        type: LIST_COCKTAILS,
        payload: res.data.drinks
    })
}
export const searchCocktail = (setLoading,value) => async (dispatch) => {
    const res = await axios.get(SEARCH_COCKTAILS_BY_NAME + value)
    setLoading(false)
    dispatch({
        type: LIST_SEARCH,
        payload: res.data.drinks
    })
}

export const detailCocktail = (id,setLoading) => async (dispatch) => {
    const res = await axios.get(GET_DETAIL_BY_ID + id)
    setLoading(false)
    dispatch({
        type: LIST_DETAIL,
        payload: res.data.drinks[0]
    })
}
export const getIngredient = (name) => async (dispatch) => {
    const res = await axios.get(SEARCH_INGREDIENT_BY_NAME + name)
    // setLoading(false)
    dispatch({
        type: SEARCH_INGREDIENT,
        payload: res.data.ingredients
    })
}

export const getCategory = (setLoading,value) => async (dispatch) => {
    const res = await axios.get(GET_CATEGORY + value)
    setLoading(false)
    dispatch({
        type: GET_CATEGORIES,
        payload: res.data.drinks
    })
}

