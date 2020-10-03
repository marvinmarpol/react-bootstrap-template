import React from 'react'
import Slider from '../components/slider';
import Trademark from '../components/trademark';
import Reason from '../components/reason';
import Divider from '../components/divider';
import Kelas from '../components/kelas';
import Testimony from '../components/testimony';
import PreFooter from '../components/pre-footer';
import ArticleList from '../components/ArticleSection';

const Home = () => {
    return (
        <div>
            <Slider />
            <Divider scale="5" />
            <Trademark />
            <Divider scale="5" />
            <Divider scale="3" />
            <Reason title={'Kenapa Vektoria?'} />
            <Divider scale="5" />
            <Kelas title="Kelas Vektoria" />
            <Divider scale="5" />
            <Divider scale="2" />
            <Testimony title="Kata Mereka tentang Vektoria" />
            <Divider scale="5" />
            <PreFooter title="Download Silabus Kelas Vektoria" content="Tertarik ikut kelas kami dan ingin tahu lebih lanjut apa saja yang bakal kamu pelajari nantinya? Download silabus sekarang!" />
            <ArticleList />
        </div>
    );
}

export default Home;