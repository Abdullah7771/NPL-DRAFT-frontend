import React from 'react'
import "../App";
import {BASE_URL} from "../App"

//define arrays of teams//
let united = [];
let aces = [];
let shanenawait = [];
let janbaz = [];
let sultan = [];
let royals = [];



//push data coming from api into teams array using their team id//
//${BASE_URL}/api/team/players/1 //
const TeamUnited = async () => {
    const data = await fetch(`${BASE_URL}/api/team/players/1`)
        .then((response) => response.json())
        .then((team) => {
            //slice[0]: copies from 0 index to end if second arg. is not given//
            united = team[0].players.slice(0);
            return united;



        }).catch((err)=>console.log(err));

};

TeamUnited();





const TeamShaneNawait = async () => {
    const data = await fetch("${BASE_URL}/api/team/players/2")
        .then((response) => response.json())
        .then((team) => {
              //slice[0]: copies from 0 index to end if second arg. is not given//
            shanenawait = team[0].players.slice(0);
                return shanenawait;


        });
};

TeamShaneNawait();



const TeamSultan = async () => {
    const data = await fetch(`${BASE_URL}/api/team/players/3`)
        .then((response) => response.json())
        .then((team) => {
              //slice[0]: copies from 0 index to end if second arg. is not given//
            sultan = team[0].players.slice(0);
            return sultan;
        });
};

TeamSultan();



const TeamJanbaz = async () => {
    const data = await fetch(`${BASE_URL}/api/team/players/4`)
        .then((response) => response.json())
        .then((team) => {
            janbaz = team[0].players.slice(0);
            return janbaz;
        });
};

TeamJanbaz();



const TeamRoyals = async () => {
    const data = await fetch(`${BASE_URL}/api/team/players/5`)
        .then((response) => response.json())
        .then((team) => {
            royals = team[0].players.slice(0);
            return royals;

        });
};

TeamRoyals();




const TeamAces = async () => {
    const data = await fetch(`${BASE_URL}/api/team/players/6`)
        .then((response) => response.json())
        .then((team) => {
            aces = team[0].players.slice(0);
            return aces;

        });
};

TeamAces();




//checking teamid and returning teamarray corresponding to that//
const Allteam = (teamid) => {


    if (teamid == 6) {
        return aces;
    }
    else if (teamid == 5) {
        return royals
    }
    else if (teamid == 4) {
        return janbaz
    }
    else if (teamid == 3) {
        return sultan
    }
    else if (teamid == 2) {
        return shanenawait;
    }
    else if (teamid == 1) {
        return united;
    }
    else {
        return 0;
    }


}



export default Allteam;
export {
    TeamUnited,
    TeamAces,
    TeamJanbaz,
    TeamRoyals,
    TeamShaneNawait,
    TeamSultan
}