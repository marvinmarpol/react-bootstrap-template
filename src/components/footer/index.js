import React from 'react'
import { faFacebook, faInstagram, faWhatsapp, faMailchimp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/index.scss'

const Footer = () => {
    return (
        <div class="container-fluid footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 my-auto text-white">Vektoria ©2020 All rights Reserved</div>
                <div class="col-md-6 text-right my-auto">
                    <a class="p-3 d-inline-block" href="#"><FontAwesomeIcon icon={faFacebook} size="3x" color="#fff" /></a>
                    <a class="p-3 d-inline-block" href="#"><FontAwesomeIcon icon={faInstagram} size="3x" color="#fff" /></a>
                    <a class="p-3 d-inline-block" href="#"><FontAwesomeIcon icon={faMailchimp} size="3x" color="#fff" /></a>
                    <a class="p-3 d-inline-block" href="#"><FontAwesomeIcon icon={faWhatsapp} size="3x" color="#fff" /></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer