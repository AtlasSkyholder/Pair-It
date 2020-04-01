import React, {useState} from 'react';
 let imgSta = {
    height: '200px',
    width: '300px',
  }
function Image(props) {
   const [show, toggleShow] = useState(false);
   return (
     <img style={show ? {...imgSta, visibility : "visible"} : {...imgSta, visibility: "hidden" }} src={props.src} alt='dogs'/>
   )
}
export default Image;