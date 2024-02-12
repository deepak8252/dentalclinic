import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Search from '../component/Search';
import Weather from '../component/Weather';
import BookAppoiment from '../component/BookAppoiment';
import Location from '../component/Location';
import PopularSpecilist from '../component/PopularSpecilist';


const Mainpage = () => {
  return (
    <div>
      <Search/>
      <Weather/>
      <BookAppoiment/>
      <Location/>
      <PopularSpecilist/>
    </div>
  )
}

export default Mainpage