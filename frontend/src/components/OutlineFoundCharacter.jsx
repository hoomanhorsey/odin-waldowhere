function OutlineFoundCharacter({ verifiedCharacterCoordinates }) {
  console.log(verifiedCharacterCoordinates);
  if (!verifiedCharacterCoordinates) {
    return null;
  }

  alert(
    "now you want to display something around " + verifiedCharacterCoordinates,
  );

  const { x, y } = verifiedCharacterCoordinates;
  const radius = 10; // 20px diameter circle

  return (
    <svg
      style={{
        position: "absolute",
        left: x - radius,
        top: y - radius,
        width: radius * 2,
        height: radius * 2,
        pointerEvents: "none", // allows clicks to pass through
      }}
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius}
        fill="none"
        stroke="red"
        strokeWidth="2"
      />
    </svg>
  );
}

export default OutlineFoundCharacter;
