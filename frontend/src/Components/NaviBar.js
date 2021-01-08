import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Button, Form, FormControl, Nav} from 'react-bootstrap'


function Navibar() {
    return (
        <div>
           <Navbar bg="light" variant="light">
             <Navbar.Brand href="/home">HAIRRR</Navbar.Brand>
               <Nav className="mr-auto">
                 
                 
                 <Nav.Link href='/videos'>Videos</Nav.Link>
                 <Nav.Link href="/hairtips">Hair Tips</Nav.Link>
                 {/* <Nav.Link href='/contact'>Contact Us</Nav.Link> */}
               </Nav>
        <Form inline>
                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                 <Button variant="outline-primary">Search</Button>
               </Form>
            </Navbar>
 
        </div>
    )
}

export default Navibar
