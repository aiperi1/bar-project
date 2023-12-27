import {CHECK_STATE, CLEAR_STATE, PAGINATION_NUM, CLEAR_PAGINATE, PAGINATE_PREV, PAGINATE_NEXT} from "./type"

export const clearDetails = () => (dispatch) => {
    dispatch({
        type: CLEAR_STATE,
        payload: {}
    })
}

export const checkState = (value) => (dispatch) => {
    dispatch({
        type: CHECK_STATE,
        payload: value
    })
}

export const paginateNum = (num)=>(dispatch)=>{
    dispatch({
        type:PAGINATION_NUM,
        payload:num
})
}

export const clearPaginate = ()=>(dispatch)=>{
    dispatch({
        type:CLEAR_PAGINATE,
        payload:[]
    })
}

export const prevFunc= (num)=>(dispatch)=>{
    dispatch({
        type:PAGINATE_PREV,
        payload:num-1
    })
}

export const nextFunc= (num)=>(dispatch)=>{
    dispatch({
        type:PAGINATE_NEXT,
        payload:num+1
    })
}