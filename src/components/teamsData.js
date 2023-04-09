import React from 'react'
import { TeamUnited, TeamAces, TeamJanbaz, TeamRoyals, TeamShaneNawait, TeamSultan } from "./Allteam";
import { ChildModal3, ChildModal2 } from './NestedModal';

//defining teams array. 6 teams==6 empty objects for data to receive//
import {BASE_URL} from "../App";
let teamsData = [{}, {}, {}, {}, {}, {}];

//fetching all teams and putting into teams array//
const printTeams = async () => {
  const data = await fetch(`${BASE_URL}/api/team/fetchall`)
    .then((response) => response.json())
    .then((teams) => {
      for (var i = 0; i < teams.length; i++) {
        teamsData[i].teamid = teams[i].teamid;
        teamsData[i].name = teams[i].name;
        teamsData[i].img = teams[i].img;
        teamsData[i].players = teams[i].players;

      }
      return teams;


    });
};

printTeams();


//pushing player into database (team array) after selecting it into team//
const pushPlayer = async (id, name) => {
  const data = await fetch(`${BASE_URL}/api/team/add/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}



//Undo Last Pick if some mistake occur ..//
//not works on last pick of each round due to rotating images after each round..//
//works for first 5 picks of each round//
const UndoPickTeam = async (id) => {
  const data = await fetch(`${BASE_URL}/api/team/undopick/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',

  })
    .then((response) => response.json())
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}




//mainly used for refreshing modal to show updated Players in a team//

const showPlayerModal = (teamid) => {
  if (teamid === 6) {
    TeamAces();
  }
  else if (teamid === 5) {
    TeamRoyals();
  }
  else if (teamid === 4) {
    TeamJanbaz();
  }
  else if (teamid === 3) {
    TeamSultan();
  }
  else if (teamid === 2) {
    TeamShaneNawait();
  }
  else if (teamid === 1) {
    TeamUnited();
  }
  else {
    return 0;
  }
}



// getting name and team id and adding player to teamsArray both in code and in database//
const addToTeam = (selection, pick) => {
  let i;
  for (i = 0; i < teamsData.length; i++) {
    if (pick.teamid == teamsData[i].teamid) {
      let j = pick.teamid;
      teamsData[i]['players'].push(selection);
      pushPlayer(j, selection)
      showPlayerModal(j);
      break;
    }
  }
}



//done after Undo Last pick to remove player from both teamsArray in code and in database//
const removeFromTeam = (pick) => {
  let i;

  for (i = 0; i < teamsData.length; i++) {
    if (pick.teamid == teamsData[i].teamid) {
      let j = pick.teamid;
      teamsData[i]['players'].pop();
      console.log(j);
      // pushPlayer(j, selection)
      UndoPickTeam(j);



      break;
    }
  }
}





export default teamsData;
export { addToTeam, showPlayerModal, UndoPickTeam, removeFromTeam }
