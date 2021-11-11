import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    //Necesito saber lo que la persona esta escribiendo por eso agrego un useState
const [inputValue, setInputValue] = useState('')

const handleInputChange = (e) =>{
    setInputValue(e.target.value)
}
const handleSubmit = (e) =>{
    e.preventDefault()

    if(inputValue.trim().length>2){
        setCategories(idx => [ inputValue, ...idx])
    }
   
}


    return (
        <form onSubmit={handleSubmit}>
        {/* <h1>{inputValue}</h1> */}
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
