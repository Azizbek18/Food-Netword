import React from 'react'
import './Button.css'

function Button({children,type="button",className=""}) {
  return (
        <button className={`main__btn ${className}`}>
            {children}
        </button>
  )
}

export default Button;