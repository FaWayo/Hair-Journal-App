import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Store/actions/authActions";
import Signup from './Components/Signup/Signup'
import Home from './Components/Home/Home'
import ContactUs from './Components/ContactUs/ContactUs'
import MainHome from './Components/MainHome/MainHome';
import HairTips from './Components/HairTips/HairTips';
import Profile from './Components/UserProfile/Profile';
import Videos from './Components/Videos/Videos';
import Footer from './Components/Footer/Footer';

import SamplePost from './Components/SamplePost/SamplePost';

import { Provider } from "react-redux";
import store from "./Store/store";
import PrivateRoute from './Components/PrivateRoute';




function App() {
  // Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
  return (
   
    <Provider store={store}>
       
    
    <Router>
   
         <Switch>
         <div>
           <Route exact path = '/' component={MainHome}/>
            <Route path='/login' component={Login}/> 
            <Route path='/home' component={Home}/> 
            <Route path='/contact' component={ContactUs}/> 
            <Route path='/signup' component={Signup}/>
            <Route path='/hairtips' component={HairTips}/>
            <Route path='/videos' component={Videos}/> 
            <Route path='/profile' component={Profile}/>
            <Route path='/sample' component={SamplePost}/>
            </div>    
         </Switch>
         <Footer/>
    </Router> 
    </Provider>
    
  )
}

export default App;
