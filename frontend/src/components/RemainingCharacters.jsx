function RemainingCharacters({ gameCharacters }) {
  const score = gameCharacters.filter((char) => char.found === false);
  console.log(score);
  return <> Characters yet to find - {score.map((score) => score.name)}</>;
}

export default RemainingCharacters;
