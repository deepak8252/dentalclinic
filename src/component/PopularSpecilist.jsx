import elephnat from "../assets/img/Premium PSD _ Tooth 3d icon isolated (1)-Photoroom 1.png"
import Doctar from './Doctar';
const PopularSpecilist = () => {
  return (
    <>
     <div className="md:w-1/2 flex justify-between mt-4 items-center mx-auto sm:w-full py-3 uppercase lg:w-1/2 p-5">
    <div className=''>
    <h3 className=' text-4xl text-orange-100 text-opacity-50 font-bold'>clinic</h3>
    <h3 className=' text-4xl text-white  font-bold'>near you</h3>
    </div>
    <div className=" flex-col gap-4 bg-white rounded-3xl flex justify-center items-center">
  <img src={elephnat} alt="" />
    </div>
    </div>
    <Doctar/>
    </>
  )
}

export default PopularSpecilist