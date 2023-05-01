import React, { useState, useContext } from 'react';
import SideElements from '../elements/SideElements';
import Dashboard from '../assets/Dashboard_symb.svg'
import totm from '../assets/Totm_symb.svg'
import sum from '../assets/Summary_symb.svg'
import bank from '../assets/Bank_symb.svg'
import slider from '../assets/Slider.svg'
import { MenuContext } from './Context';


const Sidebar = () => {
  
  //Using the Context created in Context.js 
  const menu = useContext(MenuContext)

 //Used to hide all the elements of the Sidebar
  const [display, setDisplay] = useState('')

  //used to render a reverse slider when sidebar collapses in desktop view
  const [boo, setBoo] = useState(false)

  return (
    <>
      <div className={'hidden sm:inline-block border-solid border-color border '}>

        <button className={'p-5 ' + display}
          onClick={() => {
            setDisplay('hidden')
            setBoo(true)
          }}>
          <img src={slider} alt='' />
        </button>

        { //conditionally render the reverse Slider when sidebar collapses in desktop view
          boo && <button className='p-5 rotate-180'
            onClick={() => {
              setDisplay('')
              setBoo(false)
            }}>
            <img src={slider} alt='' />
          </button>}

        <SideElements src={Dashboard} title='My Dashboard' className='ml-5' cl={display} />

        <SideElements src={totm} title='TOTM links' className='ml-4' cl={display} />

        <SideElements src={sum} title='Daily Summary' className='ml-3' cl={display} />

        <SideElements src={bank} title='Bank Details' className='ml-3' cl={'bg-side-element '+display} />

      </div>
      {/* Conditional Rendering of Mobile Navbar when state turns to true */}
       {menu.mobNav && <MobBar />}

    </>
  )
}

export default Sidebar

const MobBar = () => {



  return (
    <>
      <div className={'absolute h-full w-full bg-white z-50 sm:hidden '}>



        <SideElements src={Dashboard} title='My Dashboard' className='ml-5' />

        <SideElements src={totm} title='TOTM links' className='ml-4' />

        <SideElements src={sum} title='Daily Summary' className='ml-3' />

        <SideElements src={bank} title='Bank Details' className='ml-3' cl='bg-side-element' />

      </div>
    </>
  )
}

export {MobBar}

