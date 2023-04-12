import React from 'react'
import Sidebar from '../components/Sidebar';
import InputForm from '../components/InputForm';

const Home = () => {
  return (
    <>
      <div className="flex">

        <Sidebar />

        <div className='p-3'>

          <InputForm />

        </div>


      </div>
    </>
  )
}

export default Home