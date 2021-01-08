import React, {useState} from 'react'
import {Navbar, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'
import './Signup.css'

function Signup() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getUsername = (e) =>{
        setUsername(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }


    
    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    
    function handleSubmit(e){
        e.preventDefault();
        alert('You have signed up')
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
                           <div className='heading'><h2>Join This Community!</h2></div>
                          
                           <form className="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" value={username} onChange={getUsername}>Name</label>
    <input placeholder='enter your email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" value={email} onChange={getEmail}>Email Address</label>
    <input placeholder='enter your email' type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" value={password} onChange={getPassword}>Password</label>
    <input placeholder='enter your password' type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1"> <p>I Agree to the terms and conditions</p></label>
  </div>
  <button onClick={handleSubmit} type="submit" class="btn btn-primary">Sign Up</button>

 
</form>

                       <div className='loginbutton'>
                            <Link to='/login'><Button variant='outline-primary'>Login</Button></Link>
                        </div>
</div>
                    
        )
            
        
}

export default Signup
