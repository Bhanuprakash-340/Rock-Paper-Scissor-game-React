import './index.css'

const GameView = props => {
  const {choicesList, checkResult, isShown, text, newArray, restartGame} = props

  return (
    <>
      {isShown && (
        <div className="game-view-container">
          <button
            type="button"
            className="button-img"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <img
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              className="images"
            />
          </button>
          <button
            type="button"
            className="button-img"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <img
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              className="images"
            />
          </button>
          <button
            type="button"
            className="button-img"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              className="images"
            />
          </button>
        </div>
      )}
      {!isShown && (
        <div className="result-view-container">
          <div className="extra">
            <div className="your-option">
              <h1 className="heading">You</h1>
              <img
                src={newArray[0].imageUrl}
                alt="your choice"
                className="images"
              />
            </div>
            <div className="opponent-option">
              <h1 className="heading">OPPONENT</h1>
              <img
                src={newArray[1].imageUrl}
                alt="opponent choice"
                className="images"
              />
            </div>
          </div>
          <p className="status-text">{text}</p>
          <div className="play-again-button-container">
            <button
              type="button"
              className="play-again-button"
              onClick={restartGame}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default GameView
