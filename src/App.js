import React from 'react';
import ImgBlubBlue from './img/blob_blue.png';
import ImgBlubYellow from './img/blob_yellow.png';
import { data } from "./data";
import Answer from './components/Answer';
import Question from './components/Question';

function App() {
  const [game, setGame] = React.useState(false)
  const [newGame, setNewGame] = React.useState(false)
  const [answers, setAnswers] = React.useState(data)
  const [giveCorrectAnswers, setGiveCorrectAnswers] = React.useState(false)
  const [answersSelection, setAnswersSelection] = React.useState({ //for one right answer on question
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

  // function setUserAnswers(id) {
  //   setAnswers(prevAnswers => prevAnswers.map(
  //     answer => {
  //       if(answer.id === id && !answer.isHeld) {
  //           return {...answer, isHeld: !answer.isHeld}
  //       } else if(answer.id > 0 && answer.id <= 4) {
  //           return {...answer, isHeld: false}
  //       } else 
  //           return answer
  //     }
  //   ))
  // }

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
      setAnswers(prevAnswers => prevAnswers.map(
        answer => {
          if(answer.id === id && !answer.isHeld) {
              return {...answer, isHeld: !answer.isHeld}
          } else if(answer.id <= 4) {
              return {...answer, isHeld: false}
          } else 
              return answer
        }
      ))
      // setUserAnswers(id)
    } else if(id > 4 && id <= 8 && answersSelection.selection2) {
      setAnswers(prevAnswers => prevAnswers.map(
        answer => {
          if(answer.id === id && !answer.isHeld) {
              return {...answer, isHeld: !answer.isHeld}
          } else if(answer.id > 4 && answer.id <= 8) {
              return {...answer, isHeld: false}
          } else 
              return answer
        }
      ))
    } else if(id > 8 && id <= 12 && answersSelection.selection3) {
      setAnswers(prevAnswers => prevAnswers.map(
        answer => {
          if(answer.id === id && !answer.isHeld) {
              return {...answer, isHeld: !answer.isHeld}
          } else if(answer.id > 8 && answer.id <= 12) {
              return {...answer, isHeld: false}
          } else 
              return answer
        }
      ))
    } else if(id > 12 && id <= 16 && answersSelection.selection4) {
      setAnswers(prevAnswers => prevAnswers.map(
        answer => {
          if(answer.id === id && !answer.isHeld) {
              return {...answer, isHeld: !answer.isHeld}
          } else if(answer.id > 12 && answer.id <= 16) {
              return {...answer, isHeld: false}
          } else 
              return answer
        }
      ))
    } else if(id > 16 && id <= 20 && answersSelection.selection5) {
      setAnswers(prevAnswers => prevAnswers.map(
        answer => {
          if(answer.id === id && !answer.isHeld) {
              return {...answer, isHeld: !answer.isHeld}
          } else if(answer.id > 16 && answer.id <= 20) {
              return {...answer, isHeld: false}
          } else 
              return answer
        }
      ))
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

  function displayAnswers(amount, giveCorrectAnswers) {
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
            <section className='secondPage'>
              <img className='secondPage--imgYellow' src={ImgBlubYellow} alt="yellow"/>
              <div className='secondPage--block'>
                <Question value="How would one say goodbye in Spanish?"/>
                {displayAnswers(4)}
              </div>
              <div className='secondPage--block'>
                <Question value="Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?"/>
                {displayAnswers(8)}
              </div>
              <div className='secondPage--block'>
                <Question value="What is the hottest planet in our Solar System?"/>
                {displayAnswers(12)}
              </div>
              <div className='secondPage--block'>
                <Question value="In which country was the caesar salad invented?"/>
                {displayAnswers(16)}
              </div>
              <div className='secondPage--block'>
                <Question value="How Many Hearts Does An Octopus Have?"/>
                {displayAnswers(20)}
              </div>
              {newGame ?
              <div className='secondPage--scoredBtn'>             
                <p className='secondPage--scored'>You scored {rightAnswersCount()}/5 correct answers</p>
                <button className='secondPage--btn' onClick={playAgain}>Play again</button> 
              </div>

              :
              <button className='secondPage--btn' onClick={checkAnswers}>Check answers</button>
              }
              <img className='secondPage--imgBlue' src={ImgBlubBlue} alt="blue"/>
            </section> 
            :
            <section className='startPage'>
              <img className='startPage--imgYellow' src={ImgBlubYellow} alt="yellow"/>
              <h1>Quizzical</h1>
              <p>Check your knowladge</p>
              <button className='startPage--btn' onClick={start}>Start quiz</button>
              <img className='startPage--imgBlue' src={ImgBlubBlue} alt="blue"/>
            </section>
          }
        </main>
  );
}

export default App;
