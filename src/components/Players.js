import React from 'react'

//defining players category arrays//
let keepers = [];
let bowlers = [];
let batsman = [];
let allrounders = [];
let emerging = [];
let youngguns = [];


import {BASE_URL} from "../App"

//getting players with category through api and pushing into specified category//
const printKeepers = async () => {
    const data = await fetch(`${BASE_URL}/api/player/type/keeper`)
        .then((response) => response.json())
        .then((player) => {
            //keepers from api pushing in keepers array //
            for (var i = 0; i < player.player.length; i++) {
                keepers.push(player.player[i].name);
            }
            return player;
        });

};
printKeepers();



const printBowlers = async () => {
    const data = await fetch(`${BASE_URL}/api/player/type/bowler`)
        .then((response) => response.json())
        .then((player) => {
            for (var i = 0; i < player.player.length; i++) {
                bowlers.push(player.player[i].name);
            }
            return player;
        });

};
printBowlers();


const printBatsman = async () => {
    const data = await fetch(`${BASE_URL}/api/player/type/batsman`)
        .then((response) => response.json())
        .then((player) => {
            for (var i = 0; i < player.player.length; i++) {
                batsman.push(player.player[i].name);
            }
            return player;
        });

};
printBatsman();


const printAllRounders = async () => {
    const data = await fetch(`${BASE_URL}/api/player/type/allrounder`)
        .then((response) => response.json())
        .then((player) => {
            for (var i = 0; i < player.player.length; i++) {
                allrounders.push(player.player[i].name);
            }
            return player;
        });

};
printAllRounders();



const printEmerging = async () => {
    const data = await fetch(`${BASE_URL}/api/player/type/emerging`)
        .then((response) => response.json())
        .then((player) => {
            for (var i = 0; i < player.player.length; i++) {
                emerging.push(player.player[i].name);
            }
            return player;

        });

};
printEmerging();



const printYoungGuns = async () => {
    const data = await fetch(`${BASE_URL}/api/player/type/youngguns`)
        .then((response) => response.json())
        .then((player) => {
            for (var i = 0; i < player.player.length; i++) {
                youngguns.push(player.player[i].name);
            }
            return player;

        });

};
printYoungGuns();





//checking which category we need and then providing that category array//

const Players = (category) => {
    if (category === "keeper") {
        return keepers;
    }
    else if (category === "batsman") {
        return batsman;
    }
    else if (category === "bowlers") {
        return bowlers;
    }

    else if (category === "allrounders") {
        return allrounders;
    }

    else if (category === "emerging") {
        return emerging;
    }
    else if (category === "youngguns") {
        return youngguns;
    }
    else {
        return 0;
    }





}

export default Players