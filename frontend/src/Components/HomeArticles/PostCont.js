import React from 'react'
import {PostItem} from './Posts'
import {Card, Button} from 'react-bootstrap'


function PostCont() {
    return (
        <div>
          
            <div className="blog">
       
          {
              PostItem.map((items,index) =>{
                  return( 
               
                      <div className='posts' key={index}>
       <Card>
                           <p className="title"> {items.title} </p>
                           <img src= {items.imageSrc} alt="post-photo"/>
                          
           </Card>                <p className='content'> {items.content}</p>
                          
                      </div>

                      
                  )
              })
          }
          </div>
          </div>
      

    )
}

export default PostCont
