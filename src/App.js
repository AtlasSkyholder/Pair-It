import React, {useState, useEffect} from 'react';
import dogArr from './components/dogImages.js';
import Easy from './components/Easy.js';
import Medium from './components/Medium.js';
import Hard from './components/Hard.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/App.css';
import './assets/scss/App.scss';



import {choosePics, createArr} from './components/helpers/helps';

let divDisp = {
  display: 'block'
}


function App(props) {

  
  const [finalArr, newFinalArr] = useState([]);
  let difficulty = 0;



  useEffect(() => {
    let diff = props.location.state.data[1];
    if(diff === "Easy") {
      difficulty = 6;
    } else if (diff === "Medium") {
      difficulty = 12;
    }  else {
      difficulty = 20;
    }

    const middleArr = choosePics(dogArr, difficulty);
    newFinalArr(createArr(middleArr, difficulty));
    

  },[]);

  let Diff = props.location.state.data[1];

  return (
    <div>

        {Diff === "Easy" && <Easy finalArr={finalArr} theme={props.location.state.data[0]}/> }
        {Diff === "Medium"&& <Medium finalArr={finalArr} theme={props.location.state.data[0]}/>  }
        {Diff === "Hard" && <Hard finalArr={finalArr} theme={props.location.state.data[0]}/>  }


    </div> 
  );
}

export default App;
