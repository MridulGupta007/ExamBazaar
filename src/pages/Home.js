import React from 'react'
import Sidebar from '../components/Sidebar';
import InputForm from '../components/InputForm';
// import { MenuContext } from '../components/Context';
// import { MobBar } from '../components/Sidebar';

const Home = () => {
  // const menu = useContext(MenuContext)
  return (
    <>
      <div className="flex">

        <Sidebar />
        
        <div className='px-10'>

          <InputForm />

        </div>


      </div>
    </>
  )
}

export default Home