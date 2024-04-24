import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="container">
        <Title />
        <Search />
        <Display />
      </div>
      <Map />
    </>
  );
}

function Title() {
  return (
    <>
      <h1 className="title">IP Address Tracker</h1>
    </>
  );
}

function Search() {
  return (
    <>
      <div className="searchbar-box">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="searchbar-input"
        />
        <div className="search">
          <FontAwesomeIcon icon={faChevronRight} className="search-icon" />{" "}
          {/* Us  specific icon */}
        </div>
      </div>
    </>
  );
}
function Display() {
  return (
    <div className="display">
      <div className="display-title">
        <span>IP Address</span>
        193.232.546.244
      </div>
      <div className="display-title">
        <span>Location</span>
        Ashford,kent uk
      </div>
      <div className="display-title">
        <span>Timezone</span>
        UTC + 00:00
      </div>
      <div className="display-title noborder">
        <span>ISP</span>
        verizon
      </div>
    </div>
  );
}
function Map() {
  return <div className="map"></div>;
}

export default App;
