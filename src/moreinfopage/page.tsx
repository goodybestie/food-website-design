import React from 'react'

export default function MoreInfo() {
  return (
    <>

    <div className=''>
    <div className=' flex  flex-col md:flex-row justify-center  gap-10 mt-10 p-10 '>
        <div>
        <h3 className='mb-5 text-[#2C2F24] font-medium'>Call Us:</h3>
        <p className='text-[#AD343E] font-bold text-xl'>+1-234-567-8900</p>
        </div>
        <div>
        <h3 className='mb-5 text-[#2C2F24] font-medium'>Hours:</h3>
        <p>Mon-Fri: 11am - 8pm </p>
        <p>Sat, Sun: 9am - 10pm</p>
        </div>
        <div>
        <h3 className='mb-5 text-[#2C2F24] font-medium'>Our Location:</h3>
        <p>123 Bridge Street</p>
        <p>Nowhere Land, LA 12345 <br/>United States</p>
        </div>

    </div>
    </div>
    </>
  )
}
