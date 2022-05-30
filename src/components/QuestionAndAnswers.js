import React from 'react'
import Question from './Question'

export default function QuestionAndAnswers(props) {
    return (
        <div className='secondPage--block'>
            <Question value="How would one say goodbye in Spanish?"/>
            {props.displayAnswers(props.number)}
        </div>
    )
}