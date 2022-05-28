import React from 'react'

export default function Answer(props) {
    let styles
    if(props.check && props.correctAnswers) {
        styles = {
            backgroundColor: "#94D7A2",
            borderWidth: 0
        }
    } else if(props.check && !props.correctAnswers && props.isHeld) {
        styles = {
            backgroundColor: "#F8BCBC",
            borderWidth: 0,
            opacity: 0.5
        }
    } else if(props.check && !props.isHeld) {
        styles = {
            opacity: 0.5
        }
    } else {
        styles = {
            backgroundColor: props.isHeld ? "#D6DBF5" : "",
            borderWidth: props.isHeld ? 0 : ""
        }
    }


    let name = ''
    if(props.id === 1 || props.id === 5 || props.id === 9 ||props.id === 13 || props.id === 17) {
        name = 'first'
    } else if (props.id === 2 || props.id === 6 || props.id === 10 ||props.id === 14 || props.id === 18) 
    {
        name = 'second'
    } else if (props.id === 3 || props.id === 7 || props.id === 11 ||props.id === 15 || props.id === 19) 
    {
        name = 'third'
    } else {
        name = 'fourth'
    } 

    return (
        <p style={styles} className={`secondPage--answer ${name}`} onClick={() => props.chooseAnswer(props.id)}>{props.body}</p>
    )
}