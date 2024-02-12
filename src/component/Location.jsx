import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styled from 'styled-components';
const Container=styled.div`
    height: 50vh;

`
const Location = () => {
  return (
    <Container>
    <div className="md:w-1/2 flex justify-between mt-4 items-center mx-auto sm:w-full py-3 uppercase lg:w-1/2 p-5">
    <div className=''>
    <h3 className=' text-4xl text-orange-100 text-opacity-50 font-bold'>clinic</h3>
    <h3 className=' text-4xl text-white  font-bold'>near you</h3>
    </div>
    <div className="w-16 h-24 flex-col gap-4 bg-white rounded-3xl flex justify-center items-center">
      <div>  <h2 className='font-semibold'>map</h2></div>
     <div className="w-12 h-12 flex justify-center items-center rounded-full bg-indigo-800 text-white">
 <ArrowOutwardIcon/>
     </div>
    </div>
    </div>
    </Container>
  )
}

export default Location