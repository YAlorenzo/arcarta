import React from 'react'

function Button({ styles, text }) {
  return (
    <button className={`${styles} rounded-full text-base font-bold py-3 px-7 hover:scale-90 cursor-pointer transition-transform`}>
        {text} 
    </button>
  )
}

export default Button