import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const [data, setData] = useState({ location: null, ip: null, as: null });
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData(query) {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_9NFGG2BgfIFPrQer953sI3JlDTm8C&ipAddress=${query}`
        );
        const { location, ip, as } = await response.json();
        setData({ location, ip, as });
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }

    fetchData(query);
  }, [query]);

  return (
    <>
      <div className="container">
        <Title />
        <Search query={query} setQuery={setQuery} />
        <Display location={data.location} ip={data.ip} as={data.as} />
      </div>
      <MapDisplay location={data.location} ip={data.ip} as={data.as} />
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

function Search({ query, setQuery }) {
  return (
    <>
      <div className="searchbar-box">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="searchbar-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="search">
          <FontAwesomeIcon icon={faChevronRight} className="search-icon" />{" "}
          {/* Us  specific icon */}
        </div>
      </div>
    </>
  );
}
function Display({ location, ip, as }) {
  console.log(location, ip, as);
  return (
    <div className="display">
      <div className="display-title">
        <span>IP Address</span>
        {ip}
      </div>
      <div className="display-title">
        <span>Location</span>
        {location?.city}, {location?.country}
      </div>
      <div className="display-title">
        <span>Timezone</span>
        {`UTC ${location?.timezone}`}
      </div>
      <div className="display-title noborder">
        <span>ISP</span>
        {as?.domain}
      </div>
    </div>
  );
}
function MapDisplay({ location }) {
  return <Map location={location} />;
}

function Map({ location }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (location && !mapRef.current) {
      const map = L.map("map").setView([location.lat, location.lng], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(`Your Location: ${location.city}, ${location.country}`)
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
  }, [location]);

  return (
    <div className="map" id="map" style={{ width: "100%", height: "66vh" }} />
  );
}

export default App;
