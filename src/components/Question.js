import React from 'react'

export default function Question(props) {
    return (
        <h3 className='secondPage--question'>
            {props.value}
        </h3>
    )
}