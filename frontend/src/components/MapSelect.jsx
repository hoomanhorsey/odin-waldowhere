import { useState, useEffect } from "react";

import "./MapSelect.css";

function MapSelect({ setGameStatus, setMapObject }) {
  const [mapArrayDisplay, setMapArrayDisplay] = useState([]);

  useEffect(() => {
    async function getMaps() {
      const response = await fetch(`http://localhost:3000/characters/maps`);
      const mapsArray = await response.json();

      setMapArrayDisplay(mapsArray.maps);
    }
    getMaps();
  }, []);

  async function displayStartModal(singleMap) {
    setGameStatus("IDLE");
    setMapObject(singleMap);
    console.log(singleMap);
  }

  return (
    <>
      <div>HELLO</div>

      {mapArrayDisplay.map((singleMap) => {
        return (
          <p key={singleMap.id} onClick={() => displayStartModal(singleMap)}>
            {singleMap.name}
          </p>
        );
      })}
    </>
  );
}

export default MapSelect;
