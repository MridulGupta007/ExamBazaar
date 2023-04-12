import React, { useState } from 'react'
import search from '../assets/MagnifyingGlass.svg'
import bell from '../assets/BellRinging.svg'
import person from '../assets/UserCircle.svg'
import hamburger from '../assets/Hamburger.svg'
import arrow from '../assets/Slider.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  let disp = menu ? 'hidden' : ''
  let hide = menu ? '' : 'hidden'
  return (
    <>
      <div className='max-[1023px]:hidden flex justify-between h-[10vh] items-center font-bold border-b-[0.5px] border-[#808080] px-7'>

        <h3 className='w-[10%]'>Logo</h3>

        <ul className='flex w-[58%]  justify-between h-[100%] items-center'>

          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Offers</li>
          <li>About Us</li>

        </ul>

        <div className='flex w-[15%] justify-around'>

          <img src={search} alt='' />
          <img src={bell} alt='' />
          <img src={person} alt='' />

        </div>

      </div>
      <div className='min-[640px]:hidden border-b-[0.5px] border-[#808080c3] h-[8vh] flex items-center'>
        <button className={'hover:bg-[#80808066] px-2 ' + disp} onClick={() => { setMenu(true) }}><img src={hamburger} alt='' /></button>
        <button className={'hover:bg-[#80808066] px-2 ' + hide} onClick={() => { setMenu(false) }}><img src={arrow} alt='' /></button>
      </div>

    </>
  )
}

export default Navbar