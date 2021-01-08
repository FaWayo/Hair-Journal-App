import React from 'react'
import Navibar from '../NaviBar'
import logo from '../../img/logo.png'
import { Card, Jumbotron} from 'react-bootstrap'

function SamplePost() {
    return (
        <div>
            <Navibar/>
            <Jumbotron>
            
            <div className="text-center mt-4 mb-4">
                      
           
                        <img  src={logo} alt='Logo'/> 

            </div>
            </Jumbotron>
            <div>
                <Card>
                <Card.Title>
                     What Type of Hair Porosity Do You Have?
                     
                </Card.Title>   
                <Card.Img></Card.Img>
                <Card.Body>
                <p>You may have heard the term “hair porosity” and wondered what it means. Essentially, hair porosity is about your hair’s ability to absorb and retain moisture.</p>

<p>The porosity of your hair affects how well oils and moisture pass in and out of the outermost layer of your hair, known as the cuticle.</p>

<p>Hair porosity is typically divided into three broad categories:</p>
<ul>
<li>Low porosity: Cuticles that are close together.</li>
<li>Medium porosity: Cuticles that are less tightly bound.</li>
<li>High porosity: Cuticles that are more widely spaced.</li>
</ul>
<p>This article will take a closer look at what affects the porosity of your hair, how you can figure out the type of porosity you have, and, depending on the hair porosity you have, how best to treat your hair.</p>
                </Card.Body>    
               </Card>
            </div>

            <p>Was this Post Helpful?<i class="fas fa-thumbs-up"></i><i class="fas fa-thumbs-down"></i></p>
                
        </div>
    )
}

export default SamplePost
