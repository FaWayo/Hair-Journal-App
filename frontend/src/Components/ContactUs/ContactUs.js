import React from 'react'
import NaviBar from '../NaviBar'
// import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import './ContactUs'

function ContactUs() {
    return (
        <div>
            <NaviBar/>
            <div className="contact">
                <h5>If you have any questions or enquires. Contact Us </h5>
                
                <Link to="#" className="fa fa-facebook">facebook</Link> <br/>
                <Link to="#" className="fa fa-twitter">Twitter</Link><br/>
                <Link to="#" className="fa fa-instagram">Instagram</Link><br/>
                
                

                
            </div>
        </div>
    )
}

export default ContactUs
