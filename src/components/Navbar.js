import React, { useContext } from 'react'
import search from '../assets/MagnifyingGlass.svg'
import bell from '../assets/BellRinging.svg'
import person from '../assets/UserCircle.svg'
import hamburger from '../assets/Hamburger.svg'
import { MenuContext } from './Context'
import Arrow from '../assets/Arrow.svg'

const Navbar = () => {
  
  //Using the Context created in Context.js
  const dispContext = useContext(MenuContext)


  return (
    <>
      <div className='hidden sm:flex font-sans font-bold text-[20px] leading-nav justify-between h-16 items-center border-b border-color px-7'>

        <h3>Logo</h3>

        <ul className='flex w-7/12 justify-between h-full items-center'>

          <li className='underline underline-offset-20 decoration-5 decoration-exam-green '>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Offers</li>
          <li>About Us</li>

        </ul>

        <div className='flex w-2/12 justify-around'>

          <img src={search} alt='' />
          <img src={bell} alt='' />
          <img src={person} alt='' />

        </div>

      </div>
      <div className='sm:hidden border-b border-color h-10 flex items-center'>
        {/*Conditionally rendering hamburger when the menu is closed using Context Hook */}
        {!dispContext.mobNav && <button 
                 className=' px-2 ' 
                 onClick={() => { console.log(dispContext.mobNav)
                                  dispContext.setMobNav(true);}}>
                                                                  <img src={hamburger} alt='' />
         </button>}
         {dispContext.mobNav && <button className={'hover:bg-[#80808066] p-2'} onClick={() => {
          console.log(dispContext.mobNav)
          dispContext.setMobNav(false)
        }}><img src={Arrow} alt='' width='10px' className='rotate-180'/></button>}


      </div>


    </>
  )
}

export default Navbar



