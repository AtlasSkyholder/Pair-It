import React, {useState} from 'react';
import {compareImg} from './helpers/helps';
import {Container, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import '../assets/scss/App.scss';


let imgSta = {
  height: '150px',
  width: '230px',
  visibility: 'hidden'
}

function Easy(props) {

  
  const [image, newImage] = useState("");

  const finalArr = props.finalArr;
  const theme = props.theme;
  

  return (
    <Container>
      <Row>
        <Col>
        <div className="box" onClick={() => {
          newImage(compareImg(document.getElementById("0"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
          <img id="0" style={imgSta} src={finalArr[0]} alt={theme}/>
        </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
          newImage(compareImg(document.getElementById("1"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
          <img id="1" style={imgSta} src={finalArr[1]} alt={theme}/>
        </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
          newImage(compareImg(document.getElementById("2"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
          <img id="2" style={imgSta} src={finalArr[2]} alt={theme}/>
        </div>
        </Col>

      </Row>

      <Row>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("3"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="3" style={imgSta} src={finalArr[3]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("4"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="4" style={imgSta} src={finalArr[4]} alt={theme}/>
      </div>
        </Col>
        <Col>
      <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("5"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="5" style={imgSta} src={finalArr[5]} alt={theme}/>
      </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Easy;