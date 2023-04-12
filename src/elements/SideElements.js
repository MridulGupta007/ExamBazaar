import React from 'react'
import Arrow from '../assets/Arrow.svg'

const SideElements = (props) => {

  return (
    // props.cl is utilized to hide the entire side-element from the sidebar when slider is pressed
    <div className={'flex justify-around w-[250px] my-8 py-5  hover:bg-[#80808066] max-[639px]:border-b-[0.5px] ' + props.cl}>
      <div className='flex w-40'>
        <img src={props.src} alt={props.title} />
        <h3 className={props.className}> {props.title}</h3>
      </div>
      <img src={Arrow} alt='arrow' />

    </div>
  )
}

export default SideElements