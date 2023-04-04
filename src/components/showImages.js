import React from "react";
import teamsData from "./teamsData";
import RoundAndPickObj from "./RoundandPick";


const showImages = (round) => {
  let RoundAndPickObjGlobal = RoundAndPickObj;
// 6 teams so per round will take 6 images //
//Rounds and picks are already sorted coming through database//
//So first 6 data  will contain images of 1st round and second 6 of 2nd round and so on//
  let j = (round - 1) * 6;
  var images = document.getElementsByClassName("images");
// loop images uptil next round starts so j+6//
  let t = j + 6;
  for (let i = j; i < t; i++) {
    // taking modulus since rounds can be upto 13 but our images classname (using like array) can//
     // have values uptil 6 images[5] is last img and images[0] is first of 6 images//
    let s = (i % 6);
    if (RoundAndPickObjGlobal[i].teamid == 1) {
      images[s].src = teamsData[0].img;
    }
    else if (RoundAndPickObjGlobal[i].teamid == 2) {
      images[s].src = teamsData[1].img;
    }

    else if (RoundAndPickObjGlobal[i].teamid == 3) {

      images[s].src = teamsData[2].img;
    }

    else if (RoundAndPickObjGlobal[i].teamid == 4) {
      images[s].src = teamsData[3].img;
    }

    else if (RoundAndPickObjGlobal[i].teamid == 5) {
      images[s].src = teamsData[4].img;
    }

    else if (RoundAndPickObjGlobal[i].teamid == 6) {
      images[s].src = teamsData[5].img;
    }


  }



}



export default showImages;