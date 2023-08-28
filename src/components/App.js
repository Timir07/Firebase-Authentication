import React from 'react';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login'
import ForgetPassword from './ForgetPassword';
import UpdateProfile from './UpdateProfile';
import Home from './Home';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContex';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
    <Container className='d-flex align-items-center justify-content-center'
    style={{minHeight:'100vh'}}>

      <div className='w-100' style={{maxWidth:'400px'}}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route exact path='/dashboard' Component={Dashboard}/>
            <Route path='/update-profile' Component={UpdateProfile}/>
            <Route path='/signup' Component={Signup}/>
            <Route path='/login' Component={Login}/>
            <Route path='/forgot-password' Component={ForgetPassword}/>
          </Routes>
        </AuthProvider>
      </Router>

      </div>
      
    </Container>
 
  );
}

export default App;
