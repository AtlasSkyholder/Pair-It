import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Jumbotron, Button, Col, Row } from 'react-bootstrap';

import Loss from "./Loss-Horn.ogg"

export default function Header(props) {
  let audio = new Audio(Loss);

  let diff = props.diff;
  // Get today's date and time
  var rightNow = new Date().getTime();
  let time = 0;

  if (diff === "Easy") {
    time = 36;
  } else if(diff === "Medium") {
    time = 41;
  } else  if(diff === "Hard"){
    time = 51;
  }


  let counter = setInterval(timer, 1000);

  function timer() {

    time = time-1;

    if(time < 10) {
      document.getElementById("demo").style.color = "red";
    }

    

    if (time <= 0) {
      clearInterval(counter);
      document.getElementById("demo").innerHTML = "You Lose!!";
      document.getElementById('game').style.display = 'none';
      document.getElementById('reload').style.visibility = 'visible';

      if ( document.getElementById("demo").style.display !== 'none'){
        audio.play();
      }

      return;
    }

    document.getElementById("demo").innerHTML = time + "s ";

  }


  function travel () {
    document.getElementById('demo').remove();
    window.location.replace('/pair-it');
  }


  return (
    <Jumbotron>
      <Row>
      <Col>
        <h1>Pair it!!</h1>
        <h2>the game</h2>
      </Col>
      <Col>
        <Button className={"bbb"} onClick={() =>{ travel() }} variant="primary" type="submit">Choose Theme/Difficulty</Button>

        <div id='reload'>
          <Button className={"bbb"} variant="primary" onClick={() => { window.location.replace('/pair-it/game')}}>Try Again?</Button>
        </div>
      </Col>
      <Col>
        <p id="demo" className={"timer"}></p>
      </Col>

      </Row>
     

      
    </Jumbotron>

  )
}