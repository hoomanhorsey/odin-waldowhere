import { useState, useEffect } from "react";

import "./MapSelect.css";

const backendURL = import.meta.env.VITE_BACKEND_URL;

function MapSelect({ setGameStatus, setMapObject }) {
  const [mapArrayDisplay, setMapArrayDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMaps() {
      const response = await fetch(`${backendURL}/characters/maps`);
      const mapsArray = await response.json();
      setMapArrayDisplay(mapsArray.maps);
      setIsLoading(false);
    }
    getMaps();
  }, []);

  function handleMapSelect(singleMap) {
    setGameStatus("IDLE");
    setMapObject(singleMap);
  }

  return (
    <>
      {isLoading ? (
        <p className="loading-message">Loading maps... please wait</p>
      ) : (
        mapArrayDisplay.map((singleMap) => {
          return (
            <p key={singleMap.id} onClick={() => handleMapSelect(singleMap)}>
              - {singleMap.name} -
            </p>
          );
        })
      )}
    </>
  );
}

export default MapSelect;
