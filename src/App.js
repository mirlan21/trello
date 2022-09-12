// import Form from './components/Form';
import Register from './components/Register';
import './App.css';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to={'/registration'} />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
