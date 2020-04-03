import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import { Jumbotron, Button } from 'react-bootstrap';




export default function Header() {

  return (
    <Jumbotron>
      <h1>Pair it!!</h1>
      <h2>the game</h2>
      <Link to='/'><Button variant="primary" type="submit">Choose Theme/Difficulty</Button></Link>

      <div id='reload'>
        <Button variant="primary" onClick={() => { window.location.reload()}}>Try Again?</Button>
      </div>
    </Jumbotron>

  )
}