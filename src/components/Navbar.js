import React, { useState } from 'react'
import search from '../assets/MagnifyingGlass.svg'
import bell from '../assets/BellRinging.svg'
import person from '../assets/UserCircle.svg'
import hamburger from '../assets/Hamburger.svg'
import arrow from '../assets/Slider.svg'
import SideElements from '../elements/SideElements'
import Dashboard from '../assets/Dashboard_symb.svg'
import totm from '../assets/Totm_symb.svg'
import sum from '../assets/Summary_symb.svg'
import bank from '../assets/Bank_symb.svg'


const Navbar = () => {

  //Maintaining state of Hamburger Menu in Mobile View
  const [menu, setMenu] = useState(false)

  //When menu==true, displays the menu
  let disp = menu ? 'hidden' : ''

  //WHen menu==false, hides the menu
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
      { //rendering Mobile Navbar when Menu is set to true using an external component
      menu && <MobileNav />
      }

    </>
  )
}

export default Navbar

const MobileNav = () => {
  return (
    <>
      <div className={'min-[640px]:hidden max-[639px]:border-soild min-[640px]:border-[#808080] min-[640px]:border-[0.5px] z-50 absolute bg-[white] drop-shadow-lg'}>
        <SideElements src={Dashboard} title='My Dashboard' className='ml-5' cl={''} />

        <SideElements src={totm} title='TOTM links' className='ml-4' cl={''} />

        <SideElements src={sum} title='Daily Summary' className='ml-3' cl={''} />

        <SideElements src={bank} title='Bank Details' className='ml-3' cl={''} />
      </div>
    </>
  )
}

