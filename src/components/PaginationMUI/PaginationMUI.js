import React from 'react';
import {Pagination} from '@mui/material'
import './PagiantionMUI.css'
import {useDispatch} from "react-redux";
import {paginateNum} from "../../redux/actions/dispatchActions";

const PaginationMui = ({totalPosts, postPerPage, currentPage}) => {

    const dispatch = useDispatch()

    const postLength = Math.ceil(totalPosts / postPerPage)

    return (
        <div className='wrap pagination__mui'>
            <div className="secondary">
                <Pagination
                    count={postLength}
                    color="secondary"
                    onChange={(e,num) => dispatch(paginateNum(num))}
                />
            </div>
        </div>
    );
};

export default PaginationMui;