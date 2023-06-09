// import Log from "./mainpage/login/login";
import Log from "../components/mainpage/login/Login";
// import Forget from "./mainpage/login/forget";
// import Registration from "./mainpage/login/registration";
// import Skills from "./skillspage/skills";
// import Home from "./Homepage/Home";
// import NewPass from "./mainpage/login/newpassword";
// import { Router, Route } from "react-router-dom";
// import Question from "./question/question";
// import Version from "./homepage/quey";
// import Banner from "../components/mainpage/Banner/Banner";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Main from "./Mainpage";


function Root() {
  return (
    <div className="App">
      <>
      <Main />
        <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Log />} />
          {/* <Route path="/forget" element={<Forget />} /> */}
          {/* <Route path="/skills" element={<Skills />} /> */}
          {/* <Route path="/home" element={<Banner />} /> */}
          {/* <Route path="/skills/:id" element={<Version />} /> */}
          {/* <Route path="/register" element={<Registration />} /> */}
          {/* <Route path="/newpassword" element={<NewPass />} /> */}
          {/* <Route path="/question" element={<Question />} /> */}
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default Root;
