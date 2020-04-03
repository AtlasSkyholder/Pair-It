export function compareImg (imgComp, image, total, allImageArr) {
  imgComp.style.visibility = "visible";
  if(image === "") {
    return imgComp.src;  // if image is empty, sets image for comparison as the one picked
  } else if (image === imgComp.src) {
    victory(allImageArr, total);
    return "";
  } else if (image !== imgComp.src) {
    setTimeout(() => {
      imgComp.style.visibility = "hidden";
      for (let i = 0; i < allImageArr.length; i++) {
        if (allImageArr[i].src === image) {
          allImageArr[i].style.visibility = "hidden";
        }
      }
    }, 1000);
    return "";
  } 
}

const victory = (obj, total) => {
  let count = 0;
  for (let j = 0; j < obj.length; j++) {
    if(obj[j].style.visibility === "visible") {
      count++;
    }
  }
  if(count === total) {
    document.getElementById('reload').style.visibility = 'visible';
    
  }
}

// Selects a number of pictures from an array of pictures

export function choosePics (arr, total) {
  let arr_img = [];

  while(arr_img.length < total/2) {
    let num = Math.floor(Math.random()*arr.length);
    if (arr_img.includes(arr[num])) {
      continue;
    } else {
      arr_img.push(arr[num]);
    }
  }
  return arr_img;
}

// Creates a new Array with randomized pictures. Creates an array by doubling the pictures, then randomizes them.

export function createArr(arr, total) {
  let newArr = [];
  let testArr = [];
  let list = [];
  newArr.length = total;
  for (let k = 0; k<total/2; k++) {
    testArr.push(arr[k]);
    testArr.push(arr[k]);
  }

  let count = 0;
  while(count < total) {
    let num = Math.floor(Math.random()*total);
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