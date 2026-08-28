function CharacterTargetingUI({
  verifiedCharacterCoordinates,
  imageBounds,
  handleCharacterSubmit,
}) {
  console.log("verifiedCharacterCoordinates:", verifiedCharacterCoordinates);
  console.log("imageBounds:", imageBounds);

  if (!verifiedCharacterCoordinates) {
    return null;
  }

  // Check the actual structure
  console.log("Type:", typeof verifiedCharacterCoordinates);
  console.log("Keys:", Object.keys(verifiedCharacterCoordinates));
  console.log("Full object:", JSON.stringify(verifiedCharacterCoordinates));

  const [x, y] = verifiedCharacterCoordinates;
  // const absoluteX = imageBounds.left + x;
  // const absoluteY = imageBounds.top + y;
  const radius = 15; // 20px diameter circle

  console.log(`SVG position - left: ${x - radius}, top: ${y - radius}`);

  // just for testing TODO DELETE LATER
  const charactersData = [
    { name: "John Lennon", x: 100, y: 100 },
    { name: "Paul McCartney", x: 400, y: 400 },
    { name: "Ringo Starr", x: 700, y: 700 },
    { name: "George Harrison", x: 1000, y: 1000 },
  ];

  return (
    <>
      <svg
        style={{
          position: "absolute",
          left: `${x - radius}px`,
          top: `${y - radius}px`,
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          pointerEvents: "none", // allows clicks to pass through
          border: "1px solid blue", // temporary debug line
        }}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="none"
          stroke="red"
          strokeWidth="5"
        />
      </svg>

      <div
        style={{
          position: "absolute",
          left: `${x - radius}px`,
          top: `${y - radius}px`,
          width: `${radius * 12}px`,
          height: `${radius * 12}px`,
          pointerEvents: "auto", // allows clicks to pass through
          border: "4px solid blue", // temporary debug line
        }}
      >
        <select
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setSelectedCharacter(e.target.value)}
        >
          <option>Choose a character</option>
          <option>Alice</option>
          <option>Bob</option>
        </select>
        <button onClick={handleCharacterSubmit}>Submit</button>
      </div>
    </>
  );
}

export default CharacterTargetingUI;
