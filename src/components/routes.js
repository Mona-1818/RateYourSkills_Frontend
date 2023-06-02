import React from 'react';
import Log from './mainpage/login/login';
import Forget from './mainpage/login/forget';
import Registration from './mainpage/login/registration';
import Main from './mainpage';
import Skills from './skillspage/skills';
import Home from './homepage/home';
import NewPass from './mainpage/login/newpassword';
import { Routes , Route} from 'react-router-dom';
import Question from './question/question'
import Version from './homepage/quey';

function Root() {
    return (
      <div className="App">
        <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Log />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills/:id" element= {<Version />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/newpassword" element={<NewPass />} />
          <Route path="/question" element={<Question />} />
        </Routes>
        </>
      </div>
  
    );
  }
  
  export default Root;
  