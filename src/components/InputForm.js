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
        <h1 className='text-[25px] font-bold'>Update Bank Details</h1>
        <p className='font-medium text-left w-[90%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>

      <div className='border-solid border-[#808080] border-[0.5px] p-3 min-[768px]:w-[90%]'>
         
        {/* passing 'disable' variable as the value for prop: disabled. Controls the
            freezing of Input fields */}

        <Input type='text' placeholder="Account Holder Name" name='Holder' disabled={disable} />
        <Input type='number' placeholder='Account Number' name='Acc. Number' disabled={disable} />
        <Input type='text' placeholder="IFSC Code" name='IFSC' disabled={disable} />
        <Input type='text' placeholder="Bank Name" name='B_Name' disabled={disable} />
        <Input type='text' placeholder="Bank City" name='B_City' disabled={disable} />
        <Input type='text' placeholder="Branch Name" name='Br_Name' disabled={disable} />
        <Input type='text' placeholder="Relation with Account Holder" name='Relation' disabled={disable} />

        <div className='min-[900px]:flex min-[900px]:justify-between'>
          <p className='font-bold text-[10px] min-[640px]:text-[13px]'>CONSENT</p>
          <div className='border-solid border-[0.5px] border-[#808080] p-2 min-[900px]:w-[42%] min-[1024px]:w-[55%] min-[1280px]:w-[50%]'>

            <input type='checkbox' id='cons' disabled={disable} className=''></input>
            <label for='cons'>I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details, Exambazaar will not be responsible for any loss of pay.</label>
            {
              //conditional rendering of Date of submission
              disable && <p className='font-bold'>{`Filled on ${month[(new Date()).getMonth()]} ${(new Date()).getDate()}, ${(new Date()).getFullYear()} `}</p>
            }
          </div>
        </div>


        <div className='flex justify-end mt-5'>
          
          {/* SAVE button to freeze the input fields and render Date of submission
              changes the state of 'disabled' and 'display' to improve fuctionality */}
          <button
            onClick={() => {
              setDisabled(false)
              setDisplay(undefined)

            }}
            className='w-20 h-10 bg-[whitesmoke] text-black text-[18px] rounded-sm hover:bg-[#dcdcdc]'>
            Edit
          </button>
          
          {/*EDIT functionality used to change wrong inputs */}
          <button className={'w-20 h-10 bg-[#3AA078D9] text-white text-[18px] rounded-sm hover:bg-[#3AA078] ' + display}
            type='submit'
            onClick={() => {

              setDisabled(true)
              setDisplay('hidden')


            }}>
            Save
          </button>

        </div>


      </div>
      <div className=' text-center my-10 border- border-solid border-[#808080] border-b-[0.5px] w-[90%]'>
        <p>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO <strong>ACCOUNTS@EXAMBAZAAR.COM</strong>!</p>
      </div>


    </>
  )
}

export default InputForm