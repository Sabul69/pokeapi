import React from 'react'
import "./Pokemon.styles.css"

const Pokemon = ({Img,Name,ID,add}) => {
  return (
    <div>
    <div className='Card'>
    {add &&(<p>New Pokemon captured!</p>)}
    <h3 className={add&& "none"}>{`Id: ${ID}`}</h3>
    <h2>{`Name: ${Name}`} </h2>
    <img className='Card__img' src={Img} alt={Name} />
    </div>
    </div>
  )
}

export default Pokemon