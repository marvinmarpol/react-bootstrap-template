import React from 'react'
import './styles/index.scss'
import background from './images/bg.jpeg'

const Slider = () => {
    return (
        <div id="slides" class="carousel slide" data-ride="carousel">
            {/* <ul class="carousel-indicators">
                <li data-target="#slides" data-slide-to="0" class="active"></li>
                <li data-target="#slides" data-slide-to="1"></li>
                <li data-target="#slides" data-slide-to="2"></li>
            </ul> */}
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={background} alt="" />
                    <div class="overlay"></div>
                    <div class="carousel-caption">
                        <h1>Kelas Digital Design Akhir Pekan Bersama Vektoria</h1><br></br>
                        <h3>Perkaya dirimu dengan berbagai kemampuan kreatif digital lewat kelas singkat akhir pekan dari Vektoria</h3>
                        <button type="button" class="btn btn-outline-light btn-lg">CEK JADWAL KELAS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider