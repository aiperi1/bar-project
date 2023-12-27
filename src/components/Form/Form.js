import React, {useState} from 'react';
import './Form.css'
import Button from '@mui/material/Button'
import {Box, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {checkState, clearPaginate, paginateNum} from "../../redux/actions/dispatchActions";

const Form = ({searchCocktailsUI}) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(checkState(''))
        dispatch(clearPaginate())
        dispatch(paginateNum(1))
        if (value && value.trim()) {
            searchCocktailsUI(value)
            localStorage.setItem('option', value)
        } else {
            alert('field is empty')
        }
        setValue('')

    }

    return (
        <div id='search'>
            <Box className='form__box'
                 style={{display: 'flex', columnGap: '20px'}}
                 component="form"
                 onSubmit={handleForm}
            >
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button
                    variant="contained"
                    type='submit'
                >Search</Button>
            </Box>
        </div>
    );
};

export default Form;
