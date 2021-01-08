import React from 'react'
import Header from '../Header/Header'
import Navibar from '../NaviBar'
import Sidebar from '../Sidebar/Sidebar'
import Posts from '../HomeArticles/PostCont'
import './Home.css'

import HairTips from './../HairTips/HairTips';
function Home() {
    return (
        <div>
            
            <Navibar/>
            <Header/>
            
            
           {/* <Posts/> */}
           <Sidebar/>
            
        </div>
    )
}

export default Home
