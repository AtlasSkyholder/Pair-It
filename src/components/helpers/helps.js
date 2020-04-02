export function compareImg (imgComp, num, image, total) {
  imgComp[num].style.visibility = "visible";
  if(image === "") {
    return imgComp[num].src;
  } else if (image === imgComp[num].src) {
    victory(imgComp, total);
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

const victory = (obj, total) => {
  let count = 0;
  for (let j = 0; j < obj.length; j++) {
    if(obj[j].style.visibility === "visible") {
      count++;
    }
  }
  if(count === total) {
    setTimeout(() => {
      alert("You Won!!");
    }, 500);
    
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