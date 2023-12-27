import {PAGINATE_NEXT, PAGINATE_PREV, PAGINATION_NUM} from "../actions/type";

const initialState = {
    currentPage:1,
    postPerPage:10
}

const paginationReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case PAGINATION_NUM:
            return {...state,currentPage:payload}
        case PAGINATE_PREV:
            return {...state,currentPage:payload}
        case PAGINATE_NEXT:
            return {...state,currentPage:payload}
        default:
            return state
    }
}

export default paginationReducer