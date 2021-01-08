import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Button} from 'react-bootstrap'
import logo from '../../img/logo.png'
import './Login.css'

import axios from 'axios'; 

function Login() {

  function log(e){
    e.preventDefault();
let request ={
  email: document.getElementById.value,
  password: document.getElementById.value,
}
 axios.post('http://localhost:4000/login', request)
 .then(res =>{
   alert(res.data.message );
 })
 .catch(err =>{
   console.log(err);
 })
}

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const getUsername = (e) =>{
        setUsername(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div class='container'>
                      
                      <Navbar bg='light'>
                  <Navbar.Brand href="#home">
                    <img
                       src={logo}
                       width="30"
                       height="30"
                       className="d-inline-block align-top"
                      alt="logo"
                       />
                  </Navbar.Brand>
                     <Navbar.Toggle />
                     <Navbar.Collapse className="justify-content-end">
                    
                           </Navbar.Collapse>
                           </Navbar>

                       
                           <div className='heading'><h2>Welcome!</h2></div>
                 <form onSubmit = {log} className="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" onChange={getUsername} value={username}>Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" onChange={getPassword} value={password}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <Link to='/home'><button type="submit" class="btn btn-primary">Login</button></Link>

  <br/>
                    Don't have an account? <Link to ="/signup"> <Button variant="link"> Sign up </Button> </Link>
</form>
               
            
            </div>
            
        
    )
}

export default Login
