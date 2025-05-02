import React from 'react'

const Button = (props) => {

    const {value,onClick,type,buttonType,width} = props;

    const bgColor = buttonType=="primary"?"primary-btn":"bg-white";

  return (
    <button className={`px-3 py-2 boredr-none text-[17px] rounded-md bg-white ${bgColor}`} style={{width:width}} onClick={onClick} type={type}>
        {value}
    </button>
  )
}

export default Button