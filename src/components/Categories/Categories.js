import React, {useEffect} from 'react';
import './Categories.css'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {cat} from '../../utils/constants'
import {checkState} from "../../redux/actions/dispatchActions";

const Categories = (props) => {

    const dispatch = useDispatch()

    const {check} = useSelector(state => state)

    const option = localStorage.getItem('option')
    useEffect(() => {
        cat.forEach(el => {
            if (option === el) {
                dispatch(checkState(option))
            }
        })
    }, [])

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Cocktail</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={check}
                label='Cocktail'
                defaultValue='Cocktail'
                onChange={props.handleSelect}
            >
                {cat.map((el, index) => {
                    return (
                        <MenuItem
                            key={index}
                            value={el}
                        >{el}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
};
export default Categories;