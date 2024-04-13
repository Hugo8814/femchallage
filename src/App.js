import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <>
      <div className='container'>
        <Title/>
        <Search/>
        <h3>
          Search for any IP address or domain
          IP Address
          Location
          Timezone
          UTC 
          ISP
        </h3>
      </div>
    </>
  );
}

function Title() {
  return (
    <>
      <h1 className='title'>IP Address Tracker</h1>
    </>
  );
}

function Search() {
  return (
    <>
      <div className='searchbar-box'>
        <input type="text" placeholder="Search for any IP address or domain"  className='searchbar-input'/>
        <div className='search'>
          <FontAwesomeIcon icon={faChevronRight} /> {/* Use the specific icon */}
        </div>
      </div>
    </>
  );
}

export default App;
