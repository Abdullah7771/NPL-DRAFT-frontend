import React from "react";
import "../App";
import {BASE_URL} from "../App"
// 78 rounds to 78 objects created to receive data from apis //
//Must do otherwise error saying 0 number of arrays to put data into//
let RoundAndPickObj = [
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},

];
const printRounds = async () => {
  const data = await fetch(`${BASE_URL}/api/round/fetchall`)
    .then((response) => response.json())
    .then((rounds) => {
      for (var i = 0; i < rounds.length; i++) {
        //putting into our roundsandpick array from api rounds//
        RoundAndPickObj[i].round = rounds[i].round;
        RoundAndPickObj[i].pick = rounds[i].pick;
        RoundAndPickObj[i].teamid = rounds[i].tid;


      }

      return RoundAndPickObj;
    })
}


printRounds();




export default RoundAndPickObj;


