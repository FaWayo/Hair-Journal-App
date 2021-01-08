import React from 'react'
import { Form, Card, Col, Button} from 'react-bootstrap'
import { NoteContent } from './NoteContent';
import './Notes.css';

function Notes() {
    
        const[value, setValue] = React.useState([]);
        const[notes, setNotes] = React.useState({NoteContent})
        const handleSubmit = e =>{
            e.preventDefault();
            if(!value) return;
            addNote(value);
            setValue([]);
        }
    
        const addNote = text => {
            const newNotes = [...NoteContent, { text }];
            setNotes(newNotes);
          };
    return (
        <div>
            
            {
                NoteContent.map((items, index) =>{
                    <li>{items}</li>
                    return(
                        <div className='d-flex bd-highlight'>
                            <p className="p-2 flex-fill bd-highlight" key={index}>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control value={value} type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onSubmit={handleSubmit} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>
            <p className="p-2 flex-fill bd-highlight" key={index}>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }}>
            <Form>
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onSubmit={handleSubmit} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p className="p-2 flex-fill bd-highlight" key={index}>
                 <Card border='primary' className='text-center' style={{ width: '25rem' }}>
            <Form>
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button handleSubmit={handleSubmit} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>
            </div>
                    )
                })
                
       
       }
        </div>
            
    )
}

export default Notes
