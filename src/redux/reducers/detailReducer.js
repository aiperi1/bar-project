import {CLEAR_STATE, LIST_DETAIL} from "../actions/type";

const initialState = {}

const detailReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case LIST_DETAIL:
            return payload
        case CLEAR_STATE:
            return payload
        default:
            return state
    }
}

export default detailReducer