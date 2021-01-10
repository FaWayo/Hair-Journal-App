import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
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




function App() {
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

export default App
