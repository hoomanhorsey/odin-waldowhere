function OutlineFoundCharacter({ verifiedCharacterCoordinates, imageBounds }) {
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

  return (
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
  );
}

export default OutlineFoundCharacter;
