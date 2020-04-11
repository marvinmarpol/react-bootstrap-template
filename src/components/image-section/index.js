import React from 'react'

const ImageSection = (props) => {
    return (
        <div class={props.columnSize}>
            <img src={props.src} />
        </div>
    )
}

export default ImageSection