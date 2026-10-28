import { useState, useEffect } from "react";

import "./MapSelect.css";

const backendURL = import.meta.env.VITE_BACKEND_URL;

function MapSelect({ setGameStatus, setMapObject }) {
  const [mapArrayDisplay, setMapArrayDisplay] = useState([]);

  useEffect(() => {
    async function getMaps() {
      const response = await fetch(`${backendURL}/characters/maps`);
      const mapsArray = await response.json();

      setMapArrayDisplay(mapsArray.maps);
    }
    getMaps();
  }, []);

  function handleMapSelect(singleMap) {
    setGameStatus("IDLE");
    setMapObject(singleMap);
  }

  return (
    <>
      {mapArrayDisplay.map((singleMap) => {
        return (
          <p key={singleMap.id} onClick={() => handleMapSelect(singleMap)}>
            - {singleMap.name} -
          </p>
        );
      })}
    </>
  );
}

export default MapSelect;
