import React from 'react'
// import {Card} from 'react-bootstrap'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        
        <div className = 'footer'>
            
            <footer>
            
                              <p>Copyright 2021. Fawayo</p>
                              <a href='/contactus'><p>CONTACT US</p></a>
            </footer>
           
            <div className='media-icons'>
            <Link to="#" className="fa fa-facebook"></Link> 
                <Link to="#" className="fa fa-twitter"></Link>
                <Link to="#" className="fa fa-instagram"></Link>
            </div>    
        </div>
       
    )
}

export default Footer
