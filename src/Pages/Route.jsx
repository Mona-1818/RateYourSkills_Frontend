import React from "react";
// import Log from "./mainpage/login/login";
// import Forget from "./mainpage/login/forget";
// import Registration from "./mainpage/login/registration";
// import Skills from "./skillspage/skills";
// import Home from "./Homepage/Home";
// import NewPass from "./mainpage/login/newpassword";
// import { Router, Route } from "react-router-dom";
import Main from "./Mainpage";
// import Question from "./question/question";
// import Version from "./homepage/quey";

function Root() {
  return (
    <div className="App">
      <>
      <Main />
        {/* <Router> */}
          {/* <Route path="/" element={<Main />} /> */}
          {/* <Route path="/login" element={<Log />} /> */}
          {/* <Route path="/forget" element={<Forget />} /> */}
          {/* <Route path="/skills" element={<Skills />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/skills/:id" element={<Version />} /> */}
          {/* <Route path="/register" element={<Registration />} /> */}
          {/* <Route path="/newpassword" element={<NewPass />} /> */}
          {/* <Route path="/question" element={<Question />} /> */}
        {/* </Router> */}
      </>
    </div>
  );
}

export default Root;
