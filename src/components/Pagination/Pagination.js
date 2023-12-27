import React from 'react';
import {useDispatch} from "react-redux";
import {nextFunc, paginateNum, prevFunc} from "../../redux/actions/dispatchActions";
import './Pagination.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const Pagination = ({totalPosts, postPerPage, currentPage}) => {

    const dispatch = useDispatch()

    const pageNumbers = []

    const postLength = totalPosts / postPerPage

    for (let i = 1; i <= Math.ceil(postLength); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='wrap' id='pag__span'>
            <ArrowBackIosNewOutlinedIcon
                style={currentPage===1?{
                    pointerEvents:'none',
                    opacity:0.5,
                    color:'blue',
                    cursor:'pointer',
                    fontSize:'35px',
                    userSelect:'none'
                }: {  color:'blue',
                    cursor:'pointer',
                    fontSize:'35px',
                    userSelect:'none'}}
                onClick={()=>dispatch(prevFunc(currentPage))}
            ></ArrowBackIosNewOutlinedIcon>

            {pageNumbers && pageNumbers.map(el => {
                    return (
                        <span
                            style={currentPage === el ? {backgroundColor: 'blue'} : null}
                            key={el}
                            onClick={() => dispatch(paginateNum(el))}
                        >{el}</span>
                )
                })}
            <ArrowForwardIosOutlinedIcon
                style={currentPage===10?{
                    pointerEvents:'none',
                    opacity:0.5,
                    color:'blue',
                    cursor:'pointer',
                    fontSize:'35px',
                    userSelect:'none'
                }: {  color:'blue',
                    cursor:'pointer',
                    fontSize:'35px',
                    userSelect:'none'}}
                onClick={()=>dispatch(nextFunc(currentPage))}
            ></ArrowForwardIosOutlinedIcon>
        </div>
    );
};

export default Pagination;