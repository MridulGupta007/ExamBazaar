import React, { useState } from 'react';
import SideElements from '../elements/SideElements';
import Dashboard from '../assets/Dashboard_symb.svg'
import totm from '../assets/Totm_symb.svg'
import sum from '../assets/Summary_symb.svg'
import bank from '../assets/Bank_symb.svg'
import slider from '../assets/Slider.svg'


const Sidebar = () => {
  const [display, setDisplay] = useState('')
  const [boo, setBoo] = useState(false)
  return (
    <>
      <div className={'max-[639px]:hidden min-[640px]:border-soild min-[640px]:border-[#808080] min-[640px]:border-[0.5px] '}>

        <button className={'p-5 ' + display}
          onClick={() => {
            setDisplay('hidden')
            setBoo(true)
          }}>
          <img src={slider} alt='' />
        </button>
        {boo && <button className='p-5 rotate-180'
          onClick={() => {
            setDisplay('')
            setBoo(false)
          }}>
          <img src={slider} alt='' />
        </button>}

        <SideElements src={Dashboard} title='My Dashboard' className='ml-5' cl={display} />

        <SideElements src={totm} title='TOTM links' className='ml-4' cl={display} />

        <SideElements src={sum} title='Daily Summary' className='ml-3' cl={display} />

        <SideElements src={bank} title='Bank Details' className='ml-3' cl={display} />

      </div>
    </>
  )
}

export default Sidebar