import React from 'react'
import {SidebarContent} from './SidebarContent'
import './Sidebar.css'
import '../../App.css'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
 
function Sidebar() {
    return (
        <div >
            {
             SidebarContent.map((items,index) =>{
                 <li>{items}</li>                  
                 return( 
               <div className = 'container'>
                   
                      <p className='d-flex justify-content-end' key={index}>
                          <div>
                         <Card border='primary' className='text-center' style={{ width: '65rem' }}>
                           <Card.Header className='category'>{items.category}</Card.Header>
                           <Card.Img variant='top' src= {items.imageSrc} alt="post-photo"/>
                           <Card.Body>
                           <Card.Title className="text-capitalize" className="fw-bold">{items.title}</Card.Title>
                           <Link to ="/sample"><Button size="sm" variant="outline-primary">Read</Button></Link>
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

export default Sidebar
