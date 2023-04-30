import React, { useState } from 'react';
import Input from '../elements/Input';

const InputForm = () => {

  //checks when to disable input fields and display date
  const [disable, setDisabled] = useState(false)

  //maintains when to display the SAVE button, used to hide the SAVE button when clicked
  const [display, setDisplay] = useState('')

  //Months array utilised to extract month from 'new Date()' object
  const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']


  return (
    <>


      <div className='flex flex-col items-start gap-2 py-2'>
        <h1 className='text-[33px] font-medium font-heading leading-heading'>Update Bank Details</h1>
        <p className='font-sans font-normal text-[19px] leading-para text-left w-11/12'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>

      <div className='border-solid border-color border p-3 md:w-11/12'>

        {/* passing 'disable' variable as the value for prop: disabled. Controls the
            freezing of Input fields */}

        <Input type='text' placeholder="Account Holder Name" name='Holder' disabled={disable} />
        <Input type='number' placeholder='Account Number' name='Acc. Number' disabled={disable} />
        <Input type='text' placeholder="IFSC Code" name='IFSC' disabled={disable} />
        <Input type='text' placeholder="Bank Name" name='B_Name' disabled={disable} />
        <Input type='text' placeholder="Bank City" name='B_City' disabled={disable} />
        <Input type='text' placeholder="Branch Name" name='Br_Name' disabled={disable} />
        <Input type='text' placeholder="Relation with Account Holder" name='Relation' disabled={disable} />

        <div className='sm:flex sm:justify-between'>
          <p className='font-sans font-bold text-[14px] leading-form sm:text-[13px]'>CONSENT</p>
          <div className='border-solid border border-color rounded p-2 w-full sm:w-52 min-[900px]:w-52 lg:w-3/5'>

            <input type='checkbox' id='cons' disabled={disable} className=''></input>
            <label for='cons' className='font-sans font-normal text-[14px] leading-form'>I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details, Exambazaar will not be responsible for any loss of pay.</label>
            {
              //conditional rendering of Date of submission
              disable && <p className='font-sans font-bold text-[14px] leading-form'>{`FILLED ON ${month[(new Date()).getMonth()]} ${(new Date()).getDate()}, ${(new Date()).getFullYear()} `}</p>
            }
          </div>
        </div>


        <div className='flex justify-end mt-5'>

          {/* SAVE button to freeze the input fields and render Date of submission
              changes the state of 'disabled' and 'display' to improve fuctionality */}
          <button className={'w-20 h-10 bg-exam-green-light font-sans font-bold text-[20px] leading-nav text-white rounded border-exam-green-light hover:bg-exam-green ' + display}
            type='submit'
            onClick={() => {

              setDisabled(true)
              setDisplay('hidden')


            }}>
            Save
          </button>

        </div>


      </div>
      <div className=' text-center my-10 border- border-solid border-b-color border-b w-11/12'>
        <p className='font-sans font-normal text-[14px] leading-form'>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO <strong>ACCOUNTS@EXAMBAZAAR.COM</strong>!</p>
      </div>


    </>
  )
}

export default InputForm