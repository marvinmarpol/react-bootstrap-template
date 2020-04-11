import React from 'react'
import cover from './images/cover.png'
import HeaderParagraphSection from '../header-paragraph-section'
import ImageSection from '../image-section'

const Trademark = () => {
    return (
        <div class="container">
            <div class="row">
                <HeaderParagraphSection columnSize={'col-lg-6 my-auto pl-4'} title={'Berkarya, Bermakna, Berdaya.'} content={'Vektoria membuka jalan bagi semua orang yang ingin  mempelajari disiplin ilmu digital design lewat rangkaian kelas singkat akhir pekan.'}/>
                <ImageSection columnSize={'col-lg-6 text-center'} src={cover}/>
            </div>
        </div>
    )
}

export default Trademark