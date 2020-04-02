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

function Hard(props) {

  
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
      </Row>
      <Row>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("5"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="5" style={imgSta} src={finalArr[5]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("6"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="6" style={imgSta} src={finalArr[6]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("7"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="7" style={imgSta} src={finalArr[7]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("8"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="8" style={imgSta} src={finalArr[8]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("9"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="9" style={imgSta} src={finalArr[9]} alt={theme}/>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("10"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="10" style={imgSta} src={finalArr[10]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("11"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="11" style={imgSta} src={finalArr[11]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("12"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="12" style={imgSta} src={finalArr[12]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("13"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="13" style={imgSta} src={finalArr[13]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("14"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="14" style={imgSta} src={finalArr[14]} alt={theme}/>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("15"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="15" style={imgSta} src={finalArr[15]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("16"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="16" style={imgSta} src={finalArr[16]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("17"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="17" style={imgSta} src={finalArr[17]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("18"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="18" style={imgSta} src={finalArr[18]} alt={theme}/>
      </div>
        </Col>
        <Col>
        <div className="box" onClick={() => {
        newImage(compareImg(document.getElementById("19"), image, finalArr.length, document.getElementsByTagName("IMG")))}}>
        <img id="19" style={imgSta} src={finalArr[19]} alt={theme}/>
      </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hard;