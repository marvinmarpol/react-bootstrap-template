import React from 'react'
import profile1 from './images/profile1.png'
import profile2 from './images/profile2.jpeg'
import profile3 from './images/profile3.jpeg'
import Cards from '../cards'

const Testimony = (props) =>{
return (
    <div class="container text-center">
        <h1 class="pb-5">{props.title}</h1>
        <div class="row">
            <Cards src={profile1} columnSize="col-md-4 px-3" title="Rahman Ramadhan" content="Kelas Vektoria membuka wawasan dalam memahami konsep desain dan tempat belajar mengeluarkan ide menjadi sebuah karya. Dampaknya berasa banget sekarang buat design jadi lebih tertata, terkonsep dan pastinya jadi lebih keren."/>
            <Cards src={profile2} columnSize="col-md-4 px-3" title="Cicilia Ayu" content="Di Vektoria, teknik ilustrasi vektor yang diajarkan mudah banget dimengerti, yang tadinya aku pikir ribet, ternyata simple banget. Yang tadinya gak ada ide, jadi banyak ide setelah tau cara visualisasinya gimana. Ayo gabung belajar di Vektoria!"/>
            <Cards src={profile3} columnSize="col-md-4 px-3" title="Reyhan Aditrea" content="Kelas Vektoria ini sangat cocok untuk yg baru mulai dan bingung harus mulai darimana. Mentornya asik dan keren juga dalam memberikan hands on. Pemberian materi secara teori dan aplikasinya juga balanced. Pokoknya sangat worth it!"/>
        </div>
    </div>
)
}

export default Testimony