import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import logo from '../../img/logo.png'
import './Header.css'
import {Link} from 'react-router-dom'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../Store/actions/authActions";


class Header extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    render() {
        const { user } = this.props.auth;


    
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

            <div onClick={this.onLogoutClick} className='logout-button'>
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
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Header);