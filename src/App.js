import React from 'react';
import { data } from "./data";
import Answer from './components/Answer';
import MainPage from './components/MainPage';
import StartPage from './components/StartPage';

function App() {
  const [game, setGame] = React.useState(false)
  const [newGame, setNewGame] = React.useState(false)
  const [answers, setAnswers] = React.useState(data)
  const [giveCorrectAnswers, setGiveCorrectAnswers] = React.useState(false)
  const [answersSelection, setAnswersSelection] = React.useState({
    selection1: false,
    selection2: false,
    selection3: false,
    selection4: false,
    selection5: false
  })

  let rightAnswers = 0

  
  function rightAnswersCount() {
    answers.map(answer => {
      return answer.isHeld && answer.correctAnswer ? rightAnswers++ : ""
    })
    return rightAnswers
  }


  function start() {
    setGame(prev => !prev)
  }

  function playAgain() {
    setAnswers(prevAnswers => data)
    setAnswersSelection(prevAnswers => ({
      selection1: false,
      selection2: false,
      selection3: false,
      selection4: false,
      selection5: false
    }))
    setGiveCorrectAnswers(prev => !prev)
    setNewGame(prev => !prev)
  }

  function checkAnswers() {
    setGiveCorrectAnswers(prev => !prev)
    setNewGame(prev => !prev)
  }

  function addUserAnswers(id) {
    let startNumber
    let endNumber
    if(id > 0 && id <= 4) {
      startNumber = 0
      endNumber = 4
    } else if (id > 4 && id <= 8) {
      startNumber = 4
      endNumber = 8
    } else if (id > 8 && id <= 12) {
      startNumber = 8
      endNumber = 12
    } else if (id > 12 && id <= 16) {
      startNumber = 12
      endNumber = 16
    } else {
      startNumber = 16
      endNumber = 20
    }
    setAnswers(prevAnswers => prevAnswers.map(
      answer => {
        if(answer.id === id && !answer.isHeld) {
            return {...answer, isHeld: !answer.isHeld}
        } else if(answer.id > startNumber && answer.id <= endNumber) {
            return {...answer, isHeld: false}
        } else 
            return answer
      }
    ))
  }

  function chooseAnswer(id) {
    if((id <= 4 && !answersSelection.selection1) ||
       (id > 4 && id <= 8 && !answersSelection.selection2) ||
       (id > 8 && id <= 12 && !answersSelection.selection3) ||
       (id > 12 && id <= 16 && !answersSelection.selection4) ||
       (id > 16 && id <= 20 && !answersSelection.selection5)) {
      setAnswersSelection(prevState => {
        if(id <= 4 && !answersSelection.selection1) {
          return {...prevState, selection1: !prevState.selection1}
        } else if(id > 4 && id <= 8 && !answersSelection.selection2) {
          return {...prevState, selection2: !prevState.selection2}
        } else if(id > 8 && id <= 12 && !answersSelection.selection3) {
          return {...prevState, selection3: !prevState.selection3}
        } else if(id > 12 && id <= 16 && !answersSelection.selection4) {
          return {...prevState, selection4: !prevState.selection4}
        } else if(id > 16 && id <= 20 && !answersSelection.selection5) {
          return {...prevState, selection5: !prevState.selection5}
        }
      })
      setAnswers(prevAnswers => prevAnswers.map(
        answer => answer.id === id && !answer.isHeld ? 
          {...answer, isHeld: !answer.isHeld} 
          :
          answer
      ))
    } else if(id <= 4 && answersSelection.selection1) {
      addUserAnswers(id)
    } else if(id > 4 && id <= 8 && answersSelection.selection2) {
      addUserAnswers(id)
    } else if(id > 8 && id <= 12 && answersSelection.selection3) {
      addUserAnswers(id)
    } else if(id > 12 && id <= 16 && answersSelection.selection4) {
      addUserAnswers(id)
    } else if(id > 16 && id <= 20 && answersSelection.selection5) {
      addUserAnswers(id)
    }
  }



  const answersArr = answers.map(answer => (
      <Answer
          key={answer.id} 
          id={answer.id} 
          isHeld={answer.isHeld} 
          chooseAnswer={chooseAnswer}
          body={answer.body}
          correctAnswers={answer.correctAnswer}
          check={giveCorrectAnswers}
      />
  ))

  function displayAnswers(amount) {
    const arr = []
    for(let i = amount - 4; i < amount; i++) {
      arr.push(answersArr[i])
    }
    return arr
  }

  return (
        <main>
          {
            game
            ? 
            <MainPage 
              displayAnswers={displayAnswers}
              newGame={newGame}
              rightAnswersCount={rightAnswersCount()}
              playAgain={playAgain}
              checkAnswers={checkAnswers}
            />
            :
            <StartPage 
              start={start}
            />
          }
        </main>
  );
}

export default App;
