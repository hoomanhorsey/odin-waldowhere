function Score({ gameCharacters }) {
  const total = gameCharacters.length;
  const score = gameCharacters.filter((char) => char.found).length;

  return (
    <div>
      [Score {score} out of {total}]
    </div>
  );
}

export default Score;
