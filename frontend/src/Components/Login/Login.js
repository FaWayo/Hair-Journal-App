import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Button, Form} from 'react-bootstrap'
import logo from '../../img/logo.png'
import './Login.css'

// import axios from 'axios'; 

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
      this.props.history.push("/home"); // push user to login page
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

      componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
    render() {
      const { errors } = this.state;


    return (
        <div class='container'>
            <div>     
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

            </div>
                           
          <div className='heading'>
            <h2>Welcome!</h2>
          </div>

        <Form noValidate onSubmit = {this.onSubmit} className="form">
            <Form.Group>
              <Form.Label for="email" >Username</Form.Label>
              <Form.Control
                   onChange={this.onChange}
                  type="email" 
                   id="email" 
                   value={this.state.email} 
                   error={errors.email}
                   className={classnames("", {
                              invalid: errors.email || errors.emailnotfound
                            })}/>
                      <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                      </span>
              
            </Form.Group>
           <Form.Group>
                <Form.Label for="password"  >Password</Form.Label>
                <Form.Control 
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.email}
                      type="password"
                        id="password"
                      className={classnames("", {
                          invalid: errors.password || errors.passwordincorrect
                        })}/>
                        <span className="red-text">
                          {errors.password}
                          {errors.passwordincorrect}
                        </span>
             </Form.Group>
  
  <Link to='/home'><button type="submit" class="btn btn-primary">Login</button></Link>

  <br/>
                    Don't have an account? <Link to ="/signup"> <Button variant="link"> Sign up </Button> </Link>
</Form>
               
            
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
