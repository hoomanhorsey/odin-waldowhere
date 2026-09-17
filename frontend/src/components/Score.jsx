function Score({ gameCharacters }) {
  const total = gameCharacters.length;
  const score = gameCharacters.filter((char) => char.found).length;
  console.table(gameCharacters);

  return (
    <div>
      [Score {score} out of {total}]
    </div>
  );
}

export default Score;
