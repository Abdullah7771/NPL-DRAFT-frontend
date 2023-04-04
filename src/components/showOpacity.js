import React from 'react'



function showOpacity(pick) {

  //getting current pick and applying border and focus on it//
  let i = pick - 1;
  var images = document.getElementsByClassName("images");
  let j;

  images[i].style.opacity = "100%";
  images[i].style.border = "2px solid red";

  for (j = 0; j < 6; j++) {
    if (j != i) {
      images[j].style.opacity = "40%";
      images[j].style.border = "none";
    }

  }
}


export default showOpacity

