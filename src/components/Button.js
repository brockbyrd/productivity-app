import React from 'react'

export default function Button(props) {
    const handleClick = props.handleClick


    return (
        <button onClick={handleClick}>X</button>
    )
}
