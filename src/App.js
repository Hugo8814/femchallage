import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <>
      <div className="container">
        <Title />
        <Search />
        <Display />
      </div>
      <MapDisplay />
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
function MapDisplay() {
  return <Map />;
}

function Map() {
  const mapRef = useRef(null);
  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([51.5, -0.09])
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();

      mapRef.current = map;
    }

    return () => {
      // Remove the map instance when the component unmounts
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="map" id="map" style={{ width: "100%", height: "400px" }} />
  );
}

export default App;
