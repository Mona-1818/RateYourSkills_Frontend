// import Homescreen from "./mainpage/homescreen/homescreen";
// import Video from "./mainpage/video/video";
// import Benefit from "./mainpage/benefit/benefit";
// import Footer from "../Components/Mainpage/Footer";
import Banner from "../components/mainpage/Banner/Banner";
import Video from "../Components/Mainpage/Video/Video";
import Benefit from "../components/mainpage/benefit/Benefit";


import Footer from "../Components/mainpage/footer/Footer";
import Carousel from "../components/mainpage/Carousel/Carousel";
import Faq from "../Components/Mainpage/Faq/Faq";
// import Carousel from "./mainpage/coursel/coursel";

// import Faq from "./mainpage/faq/faq";

export default function Main() {
  return (
    <div>
      <Banner />
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
