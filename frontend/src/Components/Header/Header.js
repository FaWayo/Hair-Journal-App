import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import logo from '../../img/logo.png'
import './Header.css'
import {Link} from 'react-router-dom'



function Header()  {
   
    

    
    return (
        <Jumbotron>
            <div className='logo'>
        <div className="text-center mt-4 mb-4">

              <img  src={logo} alt='Logo'/>
                    
       
        </div>
        <div className='profile-button'>
            <h3>
                <Link to='/profile'>
        <i class="fa fa-user" aria-hidden="true"></i>
                Journal
             </Link>

             </h3>
            
            </div>

            <div className='logout-button'>
            <h3>
                <Link to='/login'>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
           
             </Link>
             
             </h3>
            
            </div>
            <div className='media-icons'>
            <Link to="#" className="fa fa-facebook"></Link> 
                <Link to="#" className="fa fa-twitter"></Link>
                <Link to="#" className="fa fa-instagram"></Link>
            </div>    
            
        </div>
        </Jumbotron>
                 
            
  
    );
}

export default Header;