import React, {useState, useEffect} from 'react';

import dogArr from './components/dogImages.js';
import catArr from './components/catImages.js';
import carArr from './components/carImages.js';
import waifuArr from './components/waifuImages.js';

import Easy from './components/Easy.js';
import Medium from './components/Medium.js';
import Hard from './components/Hard.js';

import Header from './components/partials/header.js';

import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

import Victory from "./components/partials/applause3.mp3";

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/scss/App.scss';

import {choosePics, createArr} from './components/helpers/helps';

let stat = {
  opacity: 0.0
}

const victory = (obj, total) => {

  let audio = new Audio(Victory);
  let count = 0;
  for (let j = 0; j < obj.length; j++) {
    if(obj[j].style.visibility === "visible") {  // runs through the array of IMG and counts visible ones, if count = array.length, then victory
      count++;
    }
  }
  if(count === total) {
    document.getElementById('reload').style.visibility = 'visible';  
    audio.play();
    let time = 0;
    let opp = 0.0
    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        document.getElementById('test').style.opacity = opp;
        opp+=0.1;
      }, time);
      time+= 200;
    }
    document.getElementById("demo").style.display = 'none';

  }
}


function App(props) {

  const [finalArr, newFinalArr] = useState([]);
  let difficulty = 0;



  useEffect(() => {
    let diff = props.location.state.data[1];
    let theme = props.location.state.data[0];
    if(diff === "Easy") {
      difficulty = 6;
    } else if (diff === "Medium") {
      difficulty = 12;
    }  else {
      difficulty = 20;
    }

    let middleArr;

    if(theme === "Dogs") {
      middleArr = choosePics(dogArr, difficulty);
    } else if (theme === "Cats") {
      middleArr = choosePics(catArr, difficulty);
    } else if (theme === "Cars") {
      middleArr = choosePics(carArr, difficulty);
    } else if (theme === "Waifus"){
      middleArr = choosePics(waifuArr, difficulty);
    }


    newFinalArr(createArr(middleArr, difficulty));


  },[]);

  const { width, height } = useWindowSize();

  let Diff = props.location.state.data[1];

  return (
    <div>

      <div id='test' style={stat}>
        <Confetti width={width} height={height}/>
      </div>

      <Header diff={Diff} data={props.location.state.data}/>
      <div id="game">
        {Diff === "Easy" && <Easy finalArr={finalArr} theme={props.location.state.data[0]}/> }
        {Diff === "Medium"&& <Medium finalArr={finalArr} theme={props.location.state.data[0]}/>  }
        {Diff === "Hard" && <Hard finalArr={finalArr} theme={props.location.state.data[0]}/>  }
      </div>

    </div> 
  );
}

export  {victory, App};
