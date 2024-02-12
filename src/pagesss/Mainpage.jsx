import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Search from '../component/Search';
import Weather from '../component/Weather';


const Mainpage = () => {
  return (
    <div>
      <Search/>
      <Weather/>
    </div>
  )
}

export default Mainpage