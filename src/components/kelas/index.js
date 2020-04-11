import React from 'react'
import Cards from '../cards'
import kelas1 from './images/kelas1.webp'
import kelas2 from './images/kelas2.webp'

const Kelas = (props) => {
    return (
        <div class="container text-center">
            <h1 class="pb-5">{props.title}</h1>
            <div class="row">
                <Cards src={kelas1} columnSize="col-md-6 px-3" title="Kelas Ilustrasi Flat Design" content="Belajar menggambar ilustrasi flat design menggunakan Inkscape, aplikasi pengolah vektor gratis alternatif Adobe Illustrator."/>
                <Cards src={kelas2} columnSize="col-md-6 px-3" title="Kelas User Interface Design" content="Belajar membuat user interface berbagai aplikasi populer menggunakan Figma, tool wireframing dan prototyping berbasis web."/>
            </div>
        </div>
    )
}

export default Kelas