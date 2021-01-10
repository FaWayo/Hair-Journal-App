import React, {Component} from 'react'
import {Navbar, Button} from 'react-bootstrap'
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
      password2: "",
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
                           <div className='heading'><h2>Join This Community!</h2></div>
                          
    <form noValidate onSubmit={this.onSubmit} className="form">
                   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Name</label>
    <input onChange={this.onChange} placeholder='enter your name' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" className={classnames("", {
                    invalid: errors.name
                  })}/>
                  <span className="red-text">{errors.name}</span>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Email Address</label>
    <input  onChange={this.onChange} placeholder='enter your email' type="email" className="form-control" id="exampleInputPassword1" className={classnames("", {
                    invalid: errors.email
                  })}/>
                  <span className="red-text">{errors.email}</span>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input onChange={this.onChange} placeholder='enter your password' type="password" className="form-control" id="exampleInputPassword1" className={classnames("", {
                    invalid: errors.password
                  })}/>
                  <span className="red-text">{errors.password}</span>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1"> <p>I Agree to the terms and conditions</p></label>
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>

 
</form>

    <div className='loginbutton'>
                            <Link to='/login'><Button variant='outline-primary'>Login</Button></Link>
  </div>
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


