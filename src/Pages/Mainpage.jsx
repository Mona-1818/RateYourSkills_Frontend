// import Homescreen from "./mainpage/homescreen/homescreen";
// import Video from "./mainpage/video/video";
// import Benefit from "./mainpage/benefit/benefit";
// import Footer from "../Components/Mainpage/Footer";
// import Banner from "../Components/Mainpage/Banner/Banner";
import Video from "../Components/Mainpage/Video/Video";
// import Benefit from "../Components/Mainpage/Banner/Banner";


import Footer from "../Components/Mainpage/Footer/Footer";
// import Carousel from "../Components/Mainpage/Carousel/Carousel";
import Faq from "../Components/Mainpage/Faq/Faq";
// import Carousel from "./mainpage/coursel/coursel";

// import Faq from "./mainpage/faq/faq";

export default function Main() {
  return (
    <div>
      {/* <Banner /> */}
      <Video />
      {/* <Benefit /> */}
      {/* <section> */}
        {/* <Carousel /> */}
      {/* </section> */}
      <Faq />
      <Footer />
    </div>
  );
}
