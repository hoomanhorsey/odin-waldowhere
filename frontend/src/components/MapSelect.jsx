import { useState, useEffect } from "react";

import "./MapSelect.css";

function MapSelect({}) {
  const [mapArrayDisplay, setMapArrayDisplay] = useState([]);

  useEffect(() => {
    async function getMaps() {
      const response = await fetch(`http://localhost:3000/characters/maps`);
      const mapsArray = await response.json();

      setMapArrayDisplay(mapsArray.maps);
    }
    getMaps();
  }, []);

  console.table(mapArrayDisplay);

  return (
    <>
      <div>HELLO</div>

      {mapArrayDisplay.map((singleMap) => {
        return (
          <p
            key={singleMap.id}
            onClick={() => {
              console.log(singleMap.id);
            }}
          >
            {singleMap.name}
          </p>
        );
      })}
    </>
  );
}

export default MapSelect;
