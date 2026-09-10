function Score({ gameCharacters }) {
  const total = gameCharacters.length;
  const score = gameCharacters.filter((char) => char.found).length;

  return (
    <>
      [Score {score} out of {total}]
    </>
  );
}

export default Score;
