import React from 'react'

const RadioButton = ({ active, color = "#333", onClick }) => {
    return (
        <div onClick={onClick} style={{ borderColor: active && color, padding: active && "3px"}} className="border-transparent border-[2px] cursor-pointer rounded-full flex items-center w-[24px] h-[24px] justify-center">
            <div style={{ background: color }} className="rounded-full w-full h-full"></div>
        </div>
    )
}

export default RadioButton