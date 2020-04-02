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

function Medium(props) {

  
  const [image, newImage] = useState("");

  const finalArr = props.finalArr;
  const theme = props.theme;

  return (
    <Container>
      <Row>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 0, image))}}>
        <img style={imgSta} src={finalArr[0]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 1, image))}}>
        <img style={imgSta} src={finalArr[1]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 2, image))}}>
        <img style={imgSta} src={finalArr[2]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 3, image))}}>
        <img style={imgSta} src={finalArr[3]} alt={theme}/>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 4, image))}}>
        <img style={imgSta} src={finalArr[4]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 5, image))}}>
        <img style={imgSta} src={finalArr[5]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 6, image))}}>
        <img style={imgSta} src={finalArr[6]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 7, image))}}>
        <img style={imgSta} src={finalArr[7]} alt={theme}/>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 8, image))}}>
        <img style={imgSta} src={finalArr[8]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 9, image))}}>
        <img style={imgSta} src={finalArr[9]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 10, image))}}>
        <img style={imgSta} src={finalArr[10]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementsByTagName("IMG"), 11, image))}}>
        <img style={imgSta} src={finalArr[11]} alt={theme}/>
      </div>
        </Col>
      </Row>

    </Container>
  );
}

export default Medium;