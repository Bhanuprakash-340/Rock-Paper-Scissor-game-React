import './index.css'

const ScoreCardView = props => {
  const {score} = props

  return (
    <div className="score-board-container">
      <div className="texts">
        <h1 className="rock-paper-scissors">
          ROCK
          <br /> PAPER
          <br /> SCISSORS
        </h1>
      </div>
      <div className="score-card">
        <p>Score</p>
        <p className="score-text">{score}</p>
      </div>
    </div>
  )
}

export default ScoreCardView
