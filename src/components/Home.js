import React, {useState} from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Jumbotron, Button, Form } from 'react-bootstrap';

import '../assets/scss/App.scss';

function Home (props) {

  const [theme, setTheme] = useState("Dogs");
  const [diff, setDiff] = useState("Easy");

  return (
    <div>
      <Jumbotron>
        <h1>Pair it!!</h1>
        <h2>the game</h2>
      </Jumbotron>

      <div className={'forms'}>
      <Form >
        <Form.Group controlId="theme">
          <Form.Label>Choose Theme</Form.Label>
          <Form.Control className={'sele'} as="select" value={theme} onChange={e => {
            setTheme(e.target.value)
          }}>
            <option>Dogs</option>
            <option>Cats</option>
            <option>Cars</option>
            <option>Waifus</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose Difficulty</Form.Label>
          <Form.Control className={'sele'} as="select" value={diff} onChange={e => {
            setDiff(e.target.value)
          }}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </Form.Control>
        </Form.Group>
        <Link to={{pathname:'/pair-it/game', state: { data: [theme,diff] }}}><Button className={'bbb buttonFix'} variant="primary">Play!!</Button></Link>
      </Form>

      
        
      </div>
      <p className={'copyright'}>Designed and &#169; by Frederico Alves</p>
    </div>
    
  );
}

export default Home;