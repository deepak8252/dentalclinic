import React from 'react'
import teeth from "../assets/img/Rectangle 1718.png";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import money from "../assets/img/Valon Raises $43_9M for servicing platform, valued at $590M (1)-Photoroom 1.png"
const Weather = () => {
  return (
    <>
        <div className='flex px-6 my-5 justify-between mx-5 flex-wrap  gap-5 '>
            <div className=' sm:w-full md:w-96 lg:w-96 '>
                <img src={teeth} alt="" className='sm:w-full md:w-96 lg:w-96' />
            </div>
            <div className=' w-60 bg-white shadow-lg rounded-3xl h-72 px-5'>
           <div className='flex justify-between items-center'>
           <WbTwilightIcon className='text-orange-500 fs'/>
            <div className='p-3'>
                <h3 className='text-5xl text-orange-500 font-bold'>13 °</h3>
                <h5 className='text-xl text-gray-300'>Temperature</h5>
            </div>
           </div>
           <hr />
           <div className='text-center p-5'>
             <h3 className='text-center text-blue-400 font-semibold capitalize bg-gray-200 py-3 rounded-lg'>Nearest clinic</h3>
             <h3 className='text-orange-500 my-3 uppercase text-xl font-semibold'>dental clinic</h3>
             <p className='text-gray-500'>
                12/2 mathura road , sec-21 faridabad delhi
             </p>
           </div>
           <div className='my-10  bg-orange-300 bg-opacity-30 shadow-lg rounded-3xl w-60  px-5 '>
            <div className=' flex items-end justify-end mt-4'>
            <img src={money} alt="Valon Raises $43_9M for servicing platform, valued at $590M (1)-Photoroom 1.png"  className=''/>
            </div>
            <h2 className='text-white text-xl p-4 capitalize text-center'>experience inmatched without scrificing</h2>
           <div className='text-center'>
           <button className='border bg-indigo-800 text-white p-3 rounded-xl text-xl capitalize'>starting @ rs 500</button>
           </div>

           </div>
            </div>
        </div>
    </>
  )
}

export default Weather