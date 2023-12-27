import {combineReducers} from "redux";
import cocktails from "./reducers/coctailsReducer";
import detail from "./reducers/detailReducer";
import ingredient from "./reducers/ingredientReducer";
import check from "./reducers/checkReducer";
import pagination from "./reducers/paginationReducer";

const rootReducer = combineReducers({
    cocktails,
    detail,
    ingredient,
    check,
    pagination
})

export default rootReducer