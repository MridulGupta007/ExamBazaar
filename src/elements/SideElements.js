import React from 'react'
import Arrow from '../assets/Arrow.svg'

const SideElements = (props) => {

  return (
    // props.cl is utilized to hide the entire side-element from the sidebar when slider is pressed
   <div className='px-1'>
   <div className={'flex justify-around w-full p-5 font-sans font-normal text-[17px] leading-side-element rounded  hover:bg-side-element border-b ' + props.cl}>
      <div className='flex w-40'>
        <img src={props.src} alt={props.title} />
        <h3 className={props.className}> {props.title}</h3>
      </div>
      <img src={Arrow} alt='arrow' />

    </div>
    </div>
  )
}

export default SideElements