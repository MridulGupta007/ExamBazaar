import React, { useState } from 'react'

const Input = (props) => {

  //holds the value of the input fields
  const [value, setValue] = useState(undefined)

  //when SAVE button is pressed, disabled is turned to true. 
  //Then value is stored to Local Storage with key=id of input field
  props.disabled ? localStorage.setItem(`${props.name}`, value) : localStorage.removeItem(`${props.name}`, value)


  return (
    <div className='flex flex-col gap-3 my-2 sm:flex-row sm:justify-between font-sans font-bold text-[14px] leading-form'>
      <label className='sm:text-[13px]' for={props.name}>{props.placeholder.toUpperCase()}</label>
      <input type={props.type}
        id={props.name}
        placeholder={props.placeholder}

        onChange={(event) => {
          setValue(event.target.value)
        }}
        required
        disabled={props.disabled}
        className={'border-solid border-color border rounded py-2 px-5 focus:outline-none lg:w-3/5 disabled:bg-disabled  ' + props.cl}>

      </input>

    </div>
  )
}

export default Input