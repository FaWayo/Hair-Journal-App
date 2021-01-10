import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Button} from 'react-bootstrap'
import logo from '../../img/logo.png'
import './Login.css'

import axios from 'axios'; 

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../Store/actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
    const userData = {
       email: this.state.email,
       password: this.state.password
    };
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
render() {
  const { errors } = this.state;


    return (
        <div class='container'>
                      
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

                       
                           <div className='heading'><h2>Welcome!</h2></div>
                 <form noValidate onSubmit = {this.onChange} className="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Username</label>
    <input onChange={this.onChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}/>
                  <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input onChange={this.onChange} type="password" class="form-control" id="exampleInputPassword1"
    className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}/>
  </div>
  
  <Link to='/home'><button type="submit" class="btn btn-primary">Login</button></Link>

  <br/>
                    Don't have an account? <Link to ="/signup"> <Button variant="link"> Sign up </Button> </Link>
</form>
               
            
            </div>
            
        
    )
 }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
