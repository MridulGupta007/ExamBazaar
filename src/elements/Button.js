import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className={'w-3/12 h-10 sm:w-2/12 md:w-16 lg:w-20 font-sans font-bold text-[20px] leading-nav rounded ' + props.className}
            type='submit'
            onClick={props.func}>
    
            {props.name}
    
    </button>
    </>
  )
}

export default Button