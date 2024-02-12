import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Search = () => {
  return (
    <>
        <div className='w-5/6 mx-auto flex justify-between items-center flex-wrap gap-4'>
            <div>
                <h3 className=' uppercase text-orange-200 text-4xl font-extrabold  '>lets find your  </h3>
                <h3 className='text-white text-4xl uppercase font-bold'>consultant</h3>
            </div>
            <div className='flex flex-row gap-5 items-center justify-center'>
            <div className='w-68 border  bg-white py-4 rounded-lg gap-5 px-3'>
                <SavedSearchIcon style={{ fontSize: '23px !important' }}/>
                <input type="text" placeholder='search'  className='outline-none border-none px-4 '/>
               
            </div>
            <div className='w-12 h-12 rounded-full cursor-pointer flex justify-center items-center bg-blue-700'>
                <ArrowRightAltIcon className='text-white'/>
            </div>
            </div>
        </div>
    </>
  )
}

export default Search