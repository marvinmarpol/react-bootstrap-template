import React from 'react'
import { faClock, faChalkboardTeacher, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import IconHeaderParagraphSection from '../icon-header-paragraph-section'

const Reason = (props) => {
    return (
        <div class="container text-center">
            <h1>{props.title}</h1>
            <div class="row py-5">
                <IconHeaderParagraphSection columnSize={'col-xs-12 col-sm-6 col-md-4'} icon={faClock} title={'Kelas Intensif'} content={'Materi didesain agar seluruh peserta mempelajari banyak hal dalam waktu yang relatif singkat'} />
                <IconHeaderParagraphSection columnSize={'col-xs-12 col-sm-6 col-md-4'} icon={faChalkboardTeacher} title={'Mentor Berpengalaman'} content={'Mentor-mentor Vektoria terdiri dari berbagai praktisi dunia desain profesional berpengalaman'} />
                <IconHeaderParagraphSection columnSize={'col-xs-12 col-sm-6 col-md-4'} icon={faUserFriends} title={'Network Alumni'} content={'Seluruh alumni Vektoria akan bergabung dalam forum untuk berbagi, tumbuh, dan berkolaborasi'} />
            </div>
        </div>
    )
}

export default Reason