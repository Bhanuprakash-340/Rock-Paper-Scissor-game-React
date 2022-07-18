import {Component} from 'react'

import Popup from 'reactjs-popup'

import {GrFormClose} from 'react-icons/gr'

import GameView from './GameView'

import ScoreCardView from './ScoreCardView'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isShown: true,
    text: 'YOU WON',
    newArray: [choicesList[0], choicesList[1]],
  }

  displayPopup = () => {
    this.setState(prevState => ({isShown: !prevState.isShown}))
  }

  getResult = (option1, option2) => {
    // console.log(option1.id)
    // console.log(option2.id)
    if (option1.id === 'ROCK') {
      switch (option2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (option1.id === 'PAPER') {
      switch (option2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (option2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResultView = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(each => each.id === id)
    // console.log(choice1)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]

    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isShown: false,
      text: result,
      score: newScore,
      newArray: [choice1[0], choice2],
    })
  }

  restartGame = () => this.setState({isShown: true})

  render() {
    const {score, isShown, text, newArray} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <ScoreCardView score={score} />
          <GameView
            choicesList={choicesList}
            isShown={isShown}
            checkResult={this.checkResultView}
            text={text}
            newArray={newArray}
            restartGame={this.restartGame}
          />
        </div>
        <div className="button-container">
          <Popup
            trigger={
              <button type="button" className="rules-button">
                {' '}
                Rules
              </button>
            }
            modal
            position="right center"
          >
            {close => (
              <div className="pop-up">
                <div className="popup-container">
                  <button
                    type="button"
                    className="cross-button"
                    onClick={() => close()}
                  >
                    <GrFormClose className="cross-line" />
                  </button>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="pop-image"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
