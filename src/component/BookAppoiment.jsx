import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const BookAppoiment = () => {
  return (
    <>
    <div className='md:w-1/2   mx-auto sm:w-full py-3 uppercase lg:w-1/2 p-5'>
    <h3 className=' text-4xl text-orange-100 text-opacity-50 font-bold'>book</h3>
    <h3 className=' text-4xl text-white  font-bold'>Appoitment</h3>
    </div>
<div className='mx-auto md:w-1/2 sm:w-full py-10 lg:w-1/2 p-5 bg-indigo-900  rounded-xl'>
   
 <form action="">
    <div className=''>
         <div className='md:w-3/4 my-3 lg:w-3/4 sm:w-full mx-auto'>
            <input type="text"  placeholder='enter name' className='bg-white p-3 px-4 w-full capitalize text-lg outline-none font-semibold rounded-3xl'/>
         </div>
         <div className='md:w-3/4 my-3 lg:w-3/4 bg-white flex justify-between items-center sm:w-full rounded-3xl  mx-auto'>
            <input type="date"  placeholder='enter name' className='bg-white p-3 px-4 w-full outline-none capitalize text-lg font-semibold border-none rounded-3xl'/>
            <ExpandMoreIcon/>
         </div>
         <div className='md:w-3/4 my-3 lg:w-3/4 bg-white flex justify-between items-center sm:w-full rounded-3xl  mx-auto'>
            <input type="text"  placeholder='enter Problem' className='bg-white p-3 px-4 w-full outline-none capitalize text-lg font-semibold border-none rounded-3xl'/>
            <ExpandMoreIcon />
         </div>
         <div className='md:w-3/4 my-3 lg:w-3/4 bg-white flex justify-between items-center sm:w-full rounded-3xl  mx-auto'>
            <input type="text"  placeholder='consultant' className='bg-white p-3 px-4 w-full outline-none capitalize text-lg font-semibold border-none rounded-3xl'/>
            <ExpandMoreIcon />
         </div>
         <div className='md:w-3/4 my-3 lg:w-3/4 bg-white flex justify-between items-center sm:w-full rounded-3xl  mx-auto'>
            <input type="text"  placeholder='test & medicines' className='bg-white p-3 px-4 w-full outline-none capitalize text-lg font-semibold border-none rounded-3xl'/>
            <ExpandMoreIcon />
         </div>
         <div className='bg-orange-400 shadow-lg md:w-3/4 my-3 lg:w-3/4 sm:w-full mx-auto rounded-2xl'>
              <button className='p-3 px-4 w-full uppercase text-2xl outline-none font-semibold rounded-3xl text-white'>book appointment</button>
         </div>
    </div>
 </form>
</div>
    </>
  )
}

export default BookAppoiment