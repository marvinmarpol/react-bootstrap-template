import React from 'react'

const PreFooter = (props) => {
    return (
        <div class="jumbotron jumbotron-fluid bg-warning text-white mb-0">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 my-auto">
                        <h1>{props.title}</h1>
                        <p class="lead">{props.content}</p>
                    </div>
                    <div class="col-md-6 my-auto text-right">
                        <button type="button" class="btn btn-outline-light btn-lg">DOWNLOAD SEKARANG</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreFooter