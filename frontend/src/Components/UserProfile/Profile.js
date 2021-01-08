import React from 'react'
import "./Profile.css"
import {Jumbotron } from 'react-bootstrap'
import logo from '../../img/logo.png'
import Notes from './../Notes/Notes';
import Navbar from './../NaviBar'
import ToDo from '../To-dos/ToDoo';

function Profile() {
  return (
    <div>
      <div>
        <Navbar/>
        </div>
        <Jumbotron>
            
        <div className="text-center mt-4 mb-4">
                  
       
                    <img  src={logo} alt='Logo'/> 
                    
               
              <h1 className='logo'>My Hair Journal</h1>
                    
       
        </div>
        </Jumbotron>
      
        <div className="text-center">
          <ToDo/>
        </div>
      
       <div className="notes">
         <Notes/>
         
        </div> 
      </div>
   
  )
}

export default Profile
