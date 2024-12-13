import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Result from './pages/Result';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
