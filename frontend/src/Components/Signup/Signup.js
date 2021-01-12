import React, {useState} from 'react'
import {Navbar, Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'
import './Signup.css'
import Axios from 'axios';


function Signup() {
     const[username, setUsername] = useState('')
     const[email, setEmail] = useState('')
     const[password, setPassword] = useState('')

   const register = () => {
   Axios({
      method: "POST",
      data: {
        username: username,
        email: email,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:4000/users/signup",
    }).then((res)=> console.log(res));
    alert('You have signed up')
   
   };
  
   const handleUsername = (event)=>{
    setUsername(event.target.value)
    console.log(username)
   }

   const handlePassword=(event)=>{
    setPassword(event.target.value)
    console.log(password)
   }

   const handleEmail=(event)=>{
    setEmail(event.target.value)
    console.log(email)
   }



    return (
     <div class="container">
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
                           <div className='heading'><h2>Grow Your Hair With Ease!</h2></div>



    <Form noValidate onSubmit={register} className="form">
    <Form.Group >
        <Form.Label for="name" >Userame</Form.Label>
        <Form.Control onChange={handleUsername}
        placeholder='create your username'
          type="text"
          id = "name"
          value ={username}
          />
          
    
  </Form.Group>
  <Form.Group>
    <Form.Label  for="email" >Email Address</Form.Label>
    <Form.Control 
     onChange={handleEmail}
     placeholder='enter your email'
      type="email" 
      value ={email}
      id="email"
      />
      
  </Form.Group>
  <Form.Group>
    <Form.Label for='password' class="form-label" >Password</Form.Label>
    <Form.Control onChange={handlePassword}
     placeholder='enter your password'
     
     value = {password}
     type="password"
     className="form-control"
     id="password"
    />
      
   </Form.Group>

    
  <Form.Group classname="check">
    <Form.Check type="checkbox" label="I Agree to the terms and conditions" id="exampleCheck1"/>
    
  </Form.Group>
  <Button type="submit" onClick={register}>Sign Up</Button>

      
     <div className='loginbutton'>
         <span>Already Have An Account?</span><Link to='/login'><Button size="sm" variant='primary'>Login</Button></Link>
      </div>

     </Form>

      
    </div>
                    
        );
            
        
  }


export default Signup;


