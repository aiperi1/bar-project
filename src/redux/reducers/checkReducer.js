import {CHECK_STATE} from "../actions/type";

const initialState = ''

const checkReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case CHECK_STATE:
            return payload
        default:
            return state
    }
}

export default checkReducer