import gameImage from "../assets/gameImage65.jpg";

function GameBoard({ handleImageClick }) {
  return (
    <>
      <div className="gameImage">
        <img src={gameImage} onClick={handleImageClick} />
      </div>
    </>
  );
}

export default GameBoard;
