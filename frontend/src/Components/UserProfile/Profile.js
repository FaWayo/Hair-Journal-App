import React from 'react'
import "./Profile.css"
import {Jumbotron} from 'react-bootstrap'
import logo from '../../img/logo.png'

import Navbar from './../NaviBar'
import ToDo from '../To-dos/ToDoo';
// import JournalList from '../Journal/JournalList';
import NewJournal from '../Journal/NewJournal';

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
         {/* <JournalList/> */}
         
           <br/>
         <NewJournal/>
         
        </div> 
      </div>
   
  )
}

export default Profile
