function CharacterTargetingUI({
  verifiedCharacterCoordinates,
  handleCharacterSubmit,
  selectedCharacter,
  setSelectedCharacter,
  gameCharacters,
}) {
  if (!verifiedCharacterCoordinates) {
    return null;
  }

  const [x, y] = verifiedCharacterCoordinates;

  const radius = 5; // 20px diameter circle

  console.log(`SVG position - left: ${x - radius}, top: ${y - radius}`);

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
          {gameCharacters.map((char) => (
            <option key={char.id}>{char.name}</option>
          ))}
        </select>
        <button
          onClick={() => handleCharacterSubmit(x, y)}
          disabled={
            !selectedCharacter || selectedCharacter === "Choose a character"
          }
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default CharacterTargetingUI;
