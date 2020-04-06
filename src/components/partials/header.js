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
    time = 35000;
  } else if(diff === "Medium") {
    time = 40000;
  } else  if(diff === "Hard"){
    time = 45000;
  }


  // Set the date we're counting down to
  var countDownDate = new Date(rightNow + time);

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = seconds + "s ";

    if(distance < 10000) {
      document.getElementById("demo").style.color = "red";
    }
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "You Lose!!";
      document.getElementById('game').style.display = 'none';
      document.getElementById('reload').style.visibility = 'visible';

      if ( document.getElementById("demo").style.display !== 'none'){
        audio.play();
      }
 
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
        <Button className={"bbb"} onClick={() =>{ travel() }} variant="primary" type="submit">Choose Theme/Difficulty</Button>

        <div id='reload'>
          <Button className={"bbb"} variant="primary" onClick={() => { window.location.reload()}}>Try Again?</Button>
        </div>
      </Col>
      <Col>
        <p id="demo" className={"timer"}></p>
      </Col>

      </Row>
     

      
    </Jumbotron>

  )
}