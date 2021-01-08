import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../img/logo.png'
import './MainHome.css'
import {Link} from 'react-router-dom'


function MainHome() {

          
    return (
       
            <div className='main-container'>
         
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
                 
        
                           <div className="pre">
             <div>
             <img src={logo} alt='logo'/>
                  </div>
             <h1>
                 
                 A Community For Natural Hair Enthusiasts; Track Your Hair Journey, Share Helpful Information and Read On Tips To Take Care of Your Hair...... Let's Grow Our Trees!
             </h1>    
         </div>     

       <div class="d-flex justify-content-center">
       <Link to ='/login'> <button type="button" className="btn btn-primary">login</button></Link> <span>{'  '}</span>
                     <Link to ='/signup'><button type="button" className="btn btn-outline-primary">sign up</button></Link>
             </div>
                       
            
        
        </div>
    )
}

export default MainHome
