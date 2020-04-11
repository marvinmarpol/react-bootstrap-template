import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconHeaderParagraphSection = (props) => {
    return (
        <div class={props.columnSize}>
            <FontAwesomeIcon icon={props.icon} size="3x" color="#4054b2" />
            <h2 class="pt-4">{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default IconHeaderParagraphSection