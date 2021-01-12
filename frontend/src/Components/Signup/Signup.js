import React, {Component} from 'react'
import {Navbar, Button, Form} from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import logo from '../../img/logo.png'
import './Signup.css'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../Store/actions/authActions";
import classnames from "classnames";

class Signup extends Component {
     constructor() {
      super();
      this.state = {
              name: "",
              email: "",
              password: "",
              errors: {}
        };
       }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
        
  onSubmit = e => {
    e.preventDefault();

  const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

  

    this.props.registerUser(newUser, this.props.history); 
  };

  render() {
    const { errors } = this.state;

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
                           <div className='heading'><h2>Grow Your Hair With Ease!</h2></div>



    <Form noValidate onSubmit={this.onSubmit} className="form">
    <Form.Group >
        <Form.Label for="name" >Name</Form.Label>
        <Form.Control onChange={this.onChange}
        placeholder='enter your name'
          type="text"
          id = "name"
          value ={this.state.name}
          error = {errors.name} 
          className={classnames("", {
                        invalid: errors.name
                      })}
                      />
          <span className="red-text">{errors.name}</span>
    
  </Form.Group>
  <Form.Group>
    <Form.Label  for="email" >Email Address</Form.Label>
    <Form.Control 
     onChange={this.onChange}
     placeholder='enter your email'
      type="email" 
      error = {errors.email}
      id="email"
      className={classnames("", {
                    invalid: errors.email
                  })}/>
      <span className="red-text">{errors.email}</span>
  </Form.Group>
  <Form.Group>
    <Form.Label for='password' class="form-label" >Password</Form.Label>
    <Form.Control onChange={this.onChange}
     placeholder='enter your password'
     error={errors.password}
     value = {this.state.password}
     type="password"
     className="form-control"
     id="password"
     className={classnames("", {
                    invalid: errors.password
                  })}/>
      <span className="red-text">{errors.password}</span>
   </Form.Group>

    
  <Form.Group classname="check">
    <Form.Check type="checkbox" label="I Agree to the terms and conditions" id="exampleCheck1"/>
    
  </Form.Group>
  <Button type="submit" class="btn btn-primary">Sign Up</Button>

      
     <div className='loginbutton'>
         <span>Already Have An Account?</span><Link to='/login'><Button size="sm" variant='primary'>Login</Button></Link>
      </div>

     </Form>

      
    </div>
                    
        );
            
        
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));


