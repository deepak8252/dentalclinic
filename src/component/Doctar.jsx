import React from 'react'
import doc1 from "../assets/img/Pexels Photo by Andrea Piacquadio.png";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Doctar = () => {
  return (
    <>
        <div className='md:w-1/2 lg:w-1/2 sm:w-full mx-auto flex gap-5 flex-wrap flex-col'>
            <div className='w-full flex flex-row gap-4  shadow-lg bg-white rounded-2xl'>
                 <div>
                     <img src={doc1} alt="" />
                    </div> 
                    <div>
                        <h2 className=' pt-2 text-indigo-900 font-extrabold uppercase text-3xl'>dr diana graz</h2>
                        <p className='text-gray-400 uppercase'>bds mds</p>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className='pt-2 text-indigo-900 font-extrabold uppercase'>rs 250</h3>
                                <p className='text-gray-400 capitalize'>per person</p>
                            </div>
                            <div>
                            <h3 className='pt-2 text-indigo-900 font-extrabold uppercase '>general dentist</h3>
                                <p className='text-gray-400 capitalize'>specialist</p>
                            </div>
                        </div>
                    </div>
                   <div className='flex justify-start '>
                   <div className=' w-12 h-12 bg-indigo-900 text-white justify-center items-center flex rounded-full'>
                           <ArrowOutwardIcon/>
                   </div>
                   </div>
            </div>
            <div className='w-full flex flex-row gap-4  shadow-lg bg-white rounded-2xl'>
                 <div>
                     <img src={doc1} alt="" />
                    </div> 
                    <div>
                        <h2 className=' pt-2 text-indigo-900 font-extrabold uppercase text-3xl'>dr diana graz</h2>
                        <p className='text-gray-400 uppercase'>bds mds</p>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className='pt-2 text-indigo-900 font-extrabold uppercase'>rs 250</h3>
                                <p className='text-gray-400 capitalize'>per person</p>
                            </div>
                            <div>
                            <h3 className='pt-2 text-indigo-900 font-extrabold uppercase '>general dentist</h3>
                                <p className='text-gray-400 capitalize'>specialist</p>
                            </div>
                        </div>
                    </div>
                   <div className='flex justify-start '>
                   <div className=' w-12 h-12 bg-indigo-900 text-white justify-center items-center flex rounded-full'>
                           <ArrowOutwardIcon/>
                   </div>
                   </div>
            </div>
            <div className='w-full flex flex-row gap-4  shadow-lg bg-white rounded-2xl'>
                 <div>
                     <img src={doc1} alt="" />
                    </div> 
                    <div>
                        <h2 className=' pt-2 text-indigo-900 font-extrabold uppercase text-3xl'>dr diana graz</h2>
                        <p className='text-gray-400 uppercase'>bds mds</p>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className='pt-2 text-indigo-900 font-extrabold uppercase'>rs 250</h3>
                                <p className='text-gray-400 capitalize'>per person</p>
                            </div>
                            <div>
                            <h3 className='pt-2 text-indigo-900 font-extrabold uppercase '>general dentist</h3>
                                <p className='text-gray-400 capitalize'>specialist</p>
                            </div>
                        </div>
                    </div>
                   <div className='flex justify-start '>
                   <div className=' w-12 h-12 bg-indigo-900 text-white justify-center items-center flex rounded-full'>
                           <ArrowOutwardIcon/>
                   </div>
                   </div>
            </div>
        </div>
    </>
  )
}

export default Doctar