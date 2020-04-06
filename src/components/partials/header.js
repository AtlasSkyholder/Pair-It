import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Jumbotron, Button, Col, Row } from 'react-bootstrap';

import { useHistory } from "react-router-dom";

import Loss from "./Loss-Horn.ogg"

export default function Header(props) {
  console.log(props);

  let audio = new Audio(Loss);

  let diff = props.diff;

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
      document.getElementById('game').style.visibility = 'hidden';
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

  let history = useHistory();

  function handleClick() {
    history.push({pathname:'/pair-it/game', state: { data: props.data }});
    document.getElementById('game').style.visibility = 'visible';
    document.getElementById('reload').style.visibility = 'hidden';
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
          <Button onClick={ handleClick } className={"bbb"} variant="primary" >Try Again?</Button>
        </div>
      </Col>
      <Col>
        <p id="demo" className={"timer"}></p>
      </Col>

      </Row>
     

      
    </Jumbotron>

  )
}