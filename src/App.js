import React, {useState, useEffect} from 'react';
import dog1 from './storage/Dog-Puppys.jpg';
import dog2 from './storage/maxresdefault.jpg';
import dog3 from './storage/puppy-and-adult-dog.jpg';
import dog4 from './storage/dog-chef.jpg';
import dog5 from './storage/dogs-with-stick.jpg';
import dog6 from './storage/dog-yawn.jpg';

import './App.css';

let imgSta = {
  height: '200px',
  width: '300px',
  visibility: 'hidden'
}

// Selects 3 pictures from an array of pictures

function choosePics (arr) {
  let arr_img = [];

  while(arr_img.length < 3) {
    let num = Math.floor(Math.random()*6);
    if (arr_img.includes(arr[num])) {
      continue;
    } else {
      arr_img.push(arr[num]);
    }
  }
  return arr_img;
}

// Creates a new Array with randomized pictures. Creates an array by doubling the pictures, then randomizes them.

function createArr(arr) {
  let newArr = [];
  let testArr = [];
  let list = [];
  newArr.length = 6;
  for (let k = 0; k<3; k++) {
    testArr.push(arr[k]);
    testArr.push(arr[k]);
  }

  let count = 0;
  while(count < 6) {
    let num = Math.floor(Math.random()*6);
    if (list.includes(num)) {
      continue;
    } else {
      newArr[num] = testArr[count];
      list.push(num);
      count++;
    }
  }
  return newArr;
}


function App() {

  const [image, newImage] = useState("");
  const [finalArr, newFinalArr] = useState([]);

  useEffect(() => {
    const dogArr = [dog1, dog2, dog3, dog4, dog5, dog6];
    const middleArr = choosePics(dogArr);
    newFinalArr(createArr(middleArr));
  },[]);

  const victory = (obj) => {
    let count = 0;
    for (let j = 0; j < obj.length; j++) {
      if(obj[j].style.visibility === "visible") {
        count++;
      }
    }
    if(count === 6) {
      setTimeout(() => {
        alert("You Won!!");
      }, 500);
      
    }
  }

  const compareImg = (imgComp, num) => {
    imgComp[num].style.visibility = "visible";
    if(image === "") {
      return imgComp[num].src;
    } else if (image === imgComp[num].src) {
      victory(imgComp);
      return "";
    } else if (image !== imgComp[num].src) {
      setTimeout(() => {
        imgComp[num].style.visibility = "hidden";
        for (let i = 0; i < imgComp.length; i++) {
          if (imgComp[i].src === image) {
            imgComp[i].style.visibility = "hidden";
          }
        }
      }, 1000);
      return "";
    } 
  }




  return (
    <div className="App">

        <div className="box item1" onClick={() => {
          newImage(compareImg(document.getElementsByTagName("IMG"), 0))}}>
          <img style={imgSta} src={finalArr[0]} alt='dogs'/>
        </div>
        <div className="box item2" onClick={() => {
          newImage(compareImg(document.getElementsByTagName("IMG"), 1))}}>
          <img style={imgSta} src={finalArr[1]} alt='dogs'/>
        </div>
        <div className="box item3" onClick={() => {
          newImage(compareImg(document.getElementsByTagName("IMG"), 2))}}>
          <img style={imgSta} src={finalArr[2]} alt='dogs'/>
        </div>
 

        <div className="box item4" onClick={() => {
          newImage(compareImg(document.getElementsByTagName("IMG"), 3))}}>
          <img style={imgSta} src={finalArr[3]} alt='dogs'/>
        </div>
        <div className="box item5" onClick={() => {
          newImage(compareImg(document.getElementsByTagName("IMG"), 4))}}>
          <img style={imgSta} src={finalArr[4]} alt='dogs'/>
        </div>
        <div className="box item6" onClick={() => {
          newImage(compareImg(document.getElementsByTagName("IMG"), 5))}}>
          <img style={imgSta} src={finalArr[5]} alt='dogs'/>
        </div>
   
    </div>
  );
}

export default App;
