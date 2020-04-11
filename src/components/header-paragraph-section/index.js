import React from 'react'

const HeaderParagraphSection = (props) => {
    return (
        <div class={props.columnSize} >
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default HeaderParagraphSection