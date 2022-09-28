import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Error from './components/Error'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
