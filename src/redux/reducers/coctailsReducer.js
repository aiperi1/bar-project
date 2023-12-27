import {CLEAR_PAGINATE, GET_CATEGORIES, LIST_COCKTAILS, LIST_SEARCH} from "../actions/type";

const initialState = []

const cocktailsReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case LIST_COCKTAILS:
            return payload
        case LIST_SEARCH:
            return payload
        case GET_CATEGORIES:
            return payload
        case CLEAR_PAGINATE:
            return payload
        default:
            return state
    }
}

export default cocktailsReducer