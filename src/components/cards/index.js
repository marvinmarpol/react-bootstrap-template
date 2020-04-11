import React from 'react'

const Cards = (props) => {
    return (
        <div class={props.columnSize}>
            <div class="card">
                <img class="card-img-top img-fluid" src={props.src} />
                <div class="card-block p-5">
                    <h3 class="card-title">{props.title}</h3>
                    <p class="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards