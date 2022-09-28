import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Error from './components/Error'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/" element={<Profile/>} />
        <Route exact path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
