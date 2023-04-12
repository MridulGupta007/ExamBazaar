import React, { useState } from 'react'

const Input = (props) => {
  const [value, setValue] = useState(undefined)

  props.disabled ? localStorage.setItem(`${props.name}`, value) : localStorage.removeItem(`${props.name}`, value)


  return (
    <div className='flex flex-col gap-3 my-2 min-[640px]:flex-row min-[640px]:justify-between '>
      <label className='font-bold text-[10px] min-[640px]:text-[13px]' for={props.name}>{props.placeholder.toUpperCase()}</label>
      <input type={props.type}
        id={props.name}
        placeholder={props.placeholder}

        onChange={(event) => {
          setValue(event.target.value)
        }}
        required
        disabled={props.disabled}
        className={'border-solid border-grey border-[1px] py-2 px-5 focus:outline-none min-[1024px]:w-[60%] ' + props.cl}>

      </input>

    </div>
  )
}

export default Input