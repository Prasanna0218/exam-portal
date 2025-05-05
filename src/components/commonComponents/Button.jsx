import React from 'react'

const Button = (props) => {

    const {value,onClick,bgColor,color,buttonType,width} = props;

  return (
    <button className={`px-3 py-2 boredr-none text-[17px] rounded-md bg-white ${bgColor}`} style={{width:width,color:color}} onClick={onClick}>
        {value}
    </button>
  )
}

export default Button