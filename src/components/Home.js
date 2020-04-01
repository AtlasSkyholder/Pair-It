import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Jumbotron, Button } from 'react-bootstrap'; 

function Home () {


  return (
    <Jumbotron>
      <h1>Pair it!!</h1>
      <h2>the game</h2>
      <Button variant="primary" href="/game">Let's play!!</Button>
    </Jumbotron>
  );
}

export default Home;