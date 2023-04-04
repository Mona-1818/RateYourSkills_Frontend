import Homescreen from './mainpage/homescreen/homescreen';
import Video from './mainpage/video/video';
import Benefit from './mainpage/benefit/benefit';
import Carousel from './mainpage/coursel/coursel';
import Faq from './mainpage/faq/faq';
import Footer from './mainpage/footer/footer'; 

export default function Main(){
    return(
        <div>
            <Homescreen />
            <Video />
            <Benefit />
            <section>
                <Carousel />
            </section>
            <Faq />
            <Footer />
        </div>
    );
}