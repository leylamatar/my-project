import React from 'react'

const Button = ({onClick, btnText}) => {
  return (
    <button className='w-full h-10 bg-yellow-300 text-white flex items-center justify-center mt-4 rounded-md border-none' onClick={onClick}>{btnText}</button>
  )
}

export default Button