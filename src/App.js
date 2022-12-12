import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from './Components/Overview/Overview';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='bg'>
      < Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Overview />}></Route>
          <Route path='/profile' element={< Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
