import React from 'react'
import Navibar from '../NaviBar'
import {Card} from 'react-bootstrap'
import { HairTipsContent } from './HairTipsContent';

function HairTips() {
    return (
        <div>
            <Navibar/>
            {
             HairTipsContent.map((items,index) =>{
                 <li>{items}</li>                  
                 return( 
               <div className = 'container'>
                   
                      <p className='d-flex justify-content-start' key={index}>
                          <div>
                         <Card border='primary' className='text-center' style={{ width: '75rem' }}>
                           {/* <Card.Header className='category'>{items.titl}</Card.Header> */}
                           {/* <Card.Img variant='top' src= {items.Image} alt="post-photo"/> */}
                           <Card.Body>
                           <Card.Title className="text-capitalize" className="fw-bold">{items.Title}</Card.Title>
                            <p>{items.Content}</p>
                           {/* <Button size="sm" variant="outline-primary">Read</Button> */}
                           </Card.Body>
                           </Card>
                             
                           </div>
    
                      </p>
                      </div>
                  )
             })
            }
        </div>
    )
}

export default HairTips
