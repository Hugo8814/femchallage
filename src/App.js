
import './App.css';

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
    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
    </div>
    </div>
    </>
  );
}


export default App;
