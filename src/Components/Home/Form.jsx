import React from 'react';
import "./Form.styles.css";

const Form = ({handleSearch,handlePokeName, clean}) => {
  return (
    <div className='Form'>
    <input className='Form__name' type="text" onChange={(e)=>handlePokeName(e)} value={clean} placeholder="Name" />
    <button className='Form__button' onClick={handleSearch}>Catch</button>
    </div>
  )
}

export default Form