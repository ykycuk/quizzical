import React from "react";
import QuestionAndAnswers from "./QuestionAndAnswers";
import ImgBlubBlue from '../img/blob_blue.png';
import ImgBlubYellow from '../img/blob_yellow.png';


export default function MainPage(props) {
    return (
        <section className='secondPage'>
            <img className='secondPage--imgYellow' src={ImgBlubYellow} alt="yellow"/>
            < QuestionAndAnswers
                number={4}
                displayAnswers={props.displayAnswers}
            />
            < QuestionAndAnswers
                number={8}
                displayAnswers={props.displayAnswers}
            />
            < QuestionAndAnswers
                number={12}
                displayAnswers={props.displayAnswers}
            />
            < QuestionAndAnswers
                number={16}
                displayAnswers={props.displayAnswers}
            />
            < QuestionAndAnswers
                number={20}
                displayAnswers={props.displayAnswers}
            />
            {
                props.newGame 
                ?
                <div className='secondPage--scoredBtn'>             
                    <p className='secondPage--scored'>You scored {props.rightAnswersCount}/5 correct answers</p>
                    <button className='secondPage--btn' onClick={props.playAgain}>Play again</button> 
                </div>
                :
                <button className='secondPage--btn' onClick={props.checkAnswers}>Check answers</button>
            }
            <img className='secondPage--imgBlue' src={ImgBlubBlue} alt="blue"/>
        </section> 
    )
}