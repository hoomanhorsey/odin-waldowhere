// import { charArray } from "../data/TODELETEcharacters";

function CharacterNames() {
  return (
    <>
      <ul>
        {charArray.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export { CharacterNames };
