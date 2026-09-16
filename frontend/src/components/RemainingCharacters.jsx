function RemainingCharacters({ gameCharacters }) {
  const score = gameCharacters.filter((char) => char.found === false);
  return (
    <div> Characters to find - {score.map((score) => score.name + " ")}</div>
  );
}

export default RemainingCharacters;
