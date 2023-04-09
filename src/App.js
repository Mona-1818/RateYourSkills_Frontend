import './App.css';
import Log from './components/mainpage/login/login';
import Forget from './components/mainpage/login/forget';
import Registration from './components/mainpage/login/registration';
import Main from './components/mainpage';
import Home from './components/homepage/home';
import NewPass from './components/mainpage/login/newpassword'
import { Routes , Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Log />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/newpassword" element={<NewPass />} />
      </Routes>
      </>
    </div>

  );
}

export default App;