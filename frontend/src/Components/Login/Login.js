import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Button, Form} from 'react-bootstrap'
import logo from '../../img/logo.png'
import './Login.css'

 import Axios from 'axios'; 



function Login()  {
     
     const[email, setEmail] = useState('')
     const[password, setPassword] = useState('')
  
     const login = () => {
      Axios({
        method: "POST",
        data: {
          email:email,
          password: password,
        },
        withCredentials: true,
        url: "http://localhost:4000/users/login",
      }).then((res) => console.log(res));
    };

    const handleEmail = (event)=>{
      setEmail(event.target.value)
      console.log(email)
     }
  
     const handlePassword=(event)=>{
      setPassword(event.target.value)
      console.log(password)
     }

    return (
        <div class='container'>
            <div>     
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

            </div>
                           
          <div className='heading'>
            <h2>Welcome!</h2>
          </div>

        <Form noValidate onSubmit = {login} className="form">
            <Form.Group>
              <Form.Label for="email" >Email</Form.Label>
              <Form.Control
                   onChange={handleEmail}
                  type="email" 
                   id="email" 
                   value={email} 
                   />
                      
              
            </Form.Group>
           <Form.Group>
                <Form.Label for="password"  >Password</Form.Label>
                <Form.Control 
                      onChange={handlePassword}
                      value={password}
                      
                      type="password"
                        id="password"
                      />
                       
             </Form.Group>
  
  <Link to='/home'><button  onClick={login} type="submit" class="btn btn-primary">Login</button></Link>

  <br/>
                    Don't have an account? <Link to ="/signup"> <Button variant="link"> Sign up </Button> </Link>
</Form>
               
            
            </div>
            
        
    )
 }

 export default Login;
