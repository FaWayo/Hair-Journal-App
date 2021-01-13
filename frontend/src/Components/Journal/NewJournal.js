import React, {useState} from 'react'
import { Form, Card, Col, Button} from 'react-bootstrap'

import './Notes.css';
// import axios from 'axios'

function Journal({ backhairlength, fronthairlength, currentregimen, date, time }) {
    return(
        <Card> 
            <Card.Title><p>Date:{date} <span>Time:{time}</span></p></Card.Title>
            <Card.Body>
                <ul>
                <li>BackHairLength: {backhairlength}</li>
                <li>Front HairLength: {fronthairlength}</li>
                <li>{currentregimen}</li>
                </ul>
            </Card.Body>
        </Card>
        
    )
}

function Notes() {
    // const API_ENDPOINT = process.env.API_ENDPOINT || 'https://localhost://4000/journals'
    const [ fronthairlength, setFronthair ] = useState('')
    const [ backhairlength, setBackhair ] = useState('')
    const [ currentregimen, setCurrentReg] = useState('')
    const [ success, setSuccess ] = useState(false)
    const [date, setDate] = useState('')
    const[time, setTime] = useState('')
        
    const [ journals, setJournals ] = useState([
        {
            "date": "12/12/20",
            "time": "12:20pm",
            "fronthairlength": "12inches",
            "backhairlength": "11.5inches",
            "currentregimen":"i had Wash Day today; washed my hair with korkoction shampoo. Skipped prepoo but deep conditioned with no egg due to protein overload"
        }
    ])


    function handleFronthair(event){
        setFronthair(event.target.value)
    }

    function handleBackhair(event){
        setBackhair(event.target.value)
    }

    function handleCurrentReg(event){
        setCurrentReg(event.target.value)
    }

    function handleDate(event){
        setDate(event.target.value)
    }

    function handleTime(event){
        setTime(event.target.value)
    }
      
        

        
    // function addJournal(){
    //     axios.post(`http://localhost:4000/journals`, {
    //         "fronthairlength":fronthair,
    //         "backhairlength": backhair,
    //         "currentregimen": currentreg
    //     })
    //     .then((res) => {
    //         console.log(res.body)
    //         setSuccess(true)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    //     alert('added successfully')
    //      setFronthair('')
    //      setBackhair('')
    //     setCurrentReg('')
    // }
    const addJournal = (fronthairlength, backhairlength, currentregimen, date, time) => {
        const newJournals = [...journals, {fronthairlength, backhairlength, currentregimen, date, time}] 
      setJournals(newJournals)
      alert('added successfully')
    }
    return (
        <div>
        <div className="d-flex justify-content-evenly">
            <p className="mx-auto">
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>
            </div>

            <div className="d-flex justify-content-evenly">
            <p className="mx-auto">
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>
            </div>

            <div className="d-flex justify-content-evenly">
            <p className="mx-auto">
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>
            </div>

            <div className="d-flex justify-content-evenly">
            <p className="mx-auto">
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>
            </div>

            <div className="d-flex justify-content-evenly">
            <p className="mx-auto">
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>
            </div>

            <div className="d-flex justify-content-evenly">
            <p className="mx-auto">
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>

            <p>
                 <Card border='primary' className='text-center' style={{ width: '30rem' }} >
            <Form >
              <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label >Date</Form.Label>
                    <Form.Control  value={date} onChange={handleDate}type="date" placeholder="Today's Date"/>
                 </Form.Group>
              
                <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={handleTime} type="time" placeholder="What is the time?"/>
                 </Form.Group>
              </Form.Row>

              <Form.Row>
                    {/* <Form.Label>Record Your Hair Length</Form.Label> */}
                  <Form.Group as ={Col} controlId='hairstatfront'>
                      <Form.Label>Front Hair Length</Form.Label>
                      <Form.Control onChange={handleFronthair} placeholder="front hair length"/>
                  </Form.Group>
    
                  <Form.Group as ={Col} controlId='hairstatback'>
                      <Form.Label>Back Hair Length</Form.Label>
                      <Form.Control onChange={handleBackhair} placeholder="back hair length "/>
                  </Form.Group>
                  </Form.Row>


                 <Form.Group controlId="formTeaxtarea">
                    <Form.Label>Current Regimen</Form.Label>
                    <Form.Control  onChange={handleCurrentReg}as= "textarea" rows={5} placeholder="what's your current regimen?"/>
                 </Form.Group>
                 <Button onClick={addJournal} size='sm'>save</Button>
                 
    
                 
            </Form>
            </Card>
            </p>
            </div>
            
            </div>
          )}


export default Notes
