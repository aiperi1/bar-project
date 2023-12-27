import {SEARCH_INGREDIENT} from "../actions/type";

const initialState = {}

const ingredientReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SEARCH_INGREDIENT:
            return payload
        default:
            return state
    }
}

export default ingredientReducer