import { useState, useEffect } from "react";
import Map from "./components/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Set loading to true before fetching data
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events') //nasa api using fetch
      const { events } = await res.json();

      setEventData(events);
      setLoading(false) // Set loading to false after data is fetched
    }

    fetchEvents()
  }, [])


  return (
    <div>
      { !loading ? <Map eventData={eventData} /> : <div>Loading Map...</div> }
      
    </div>
  );
}

export default App;
