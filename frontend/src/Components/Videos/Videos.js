import React from 'react'
import Video from './Videoo'
import Navibar from './../NaviBar';
import {Card, Jumbotron} from 'react-bootstrap'

function Videos() {
    return (
        <div className='text-center'>

        <Navibar/>
        <Jumbotron>
            
        <div className="text-center mt-4 mb-4">
                  
       
                    
               
              <h1 className='logo'>Hair Videos</h1>
                    
       
        </div>
        </Jumbotron>
        <div className= "d-flex align-content-start flex-wrap">
            
           

             
        <Card><Video videoId='3N08nnizBPs'/>
        <Card.Footer></Card.Footer></Card>
        <Card> <Video videoId='k_lQAWOjbNQ'/></Card>
        <Card> <Video videoId='pqSqF-wqptw'/></Card>
            
            
            </div>

            
        </div>
    )
}

export default Videos
