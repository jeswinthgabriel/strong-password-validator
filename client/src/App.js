import { useState } from 'react';
import './App.css';
import passwordValidator from './utilities/passwordValidator';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const [password,setPassword] = useState()
  const [steps,setSteps] = useState()
  const [savedMessage,setSavedMessage] = useState()
  const handleSubmit= (e)=>{
    e.preventDefault()
   const stepsResult= passwordValidator(password)
     setSteps(stepsResult)
     axios.post('http://localhost:5000/password', {
      password,
      steps:stepsResult
    })
    .then(function (response) {
      setSavedMessage(response?.data?.message)
      console.log(response);
    })
    .catch(function (error) {
      setSavedMessage(error.message)
      console.log(error.message)
    });
  }
  return (
    
    <Container >
    <Row className='mt-5'>
      <Col className='mt-5'>
      <h1>
      Strong Password Steps Calculator</h1></Col>
      
    </Row>
    <Row>
    <Col className='mt-5'>
      
      <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control  value={password} onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter input Password"
        />
        <Button variant="outline-secondary" type="submit">
        Submit
        </Button>
      </InputGroup>
      </Form>
      </Col>
      <Row>
      <Col className='mt-5'>
      <div>Required Steps = {steps}</div>
      {savedMessage && <div>Message Saved</div>}</Col>
      
    </Row>
    </Row>
  </Container>
    
    
     
  

  );
}

export default App;
