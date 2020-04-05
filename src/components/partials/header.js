import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import { Jumbotron, Button, Col, Row } from 'react-bootstrap';




export default function Header() {

      // Get today's date and time
      var ooo = new Date().getTime();


    // Set the date we're counting down to
  var countDownDate = new Date(ooo + 40000);

  // Update the count down every 1 second
  var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "You Lose!!";
    }
  }, 1000);


  return (
    <Jumbotron>
      <Row>
      <Col>
        <h1>Pair it!!</h1>
        <h2>the game</h2>
      </Col>
      <Col>
        <Link to='/'><Button variant="primary" type="submit">Choose Theme/Difficulty</Button></Link>

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