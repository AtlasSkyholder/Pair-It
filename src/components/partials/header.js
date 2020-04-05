import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import { Jumbotron, Button, Col, Row } from 'react-bootstrap';




export default function Header(props) {

  let diff = props.diff;
  // Get today's date and time
  var ooo = new Date().getTime();


    // Set the date we're counting down to
  var countDownDate = new Date(ooo + 40000);

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "You Lose!!";
      document.getElementById('game').style.display = 'none';
      document.getElementById('reload').style.visibility = 'visible'; 
 
    }
  }, 1000);

  function travel () {
    document.getElementById('demo').remove();
    window.location.replace('/');
  }


  return (
    <Jumbotron>
      <Row>
      <Col>
        <h1>Pair it!!</h1>
        <h2>the game</h2>
      </Col>
      <Col>
        <Button onClick={() =>{ travel() }} variant="primary" type="submit">Choose Theme/Difficulty</Button>

        <div id='reload'>
          <Button variant="primary" onClick={() => { window.location.reload()}}>Try Again?</Button>
        </div>
      </Col>
      <Col>
        <p id="demo"></p>
      </Col>

      </Row>
     

      
    </Jumbotron>

  )
}