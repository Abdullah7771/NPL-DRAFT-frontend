import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft, faSolid, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import Modal2 from '../components/modal';
import Col from 'react-bootstrap/Col';
import teamsData from '../components/teamsData';
import showOpacity from '../components/showOpacity';
import updateImagesOfTeams from '../components/showImages';
import RoundAndPickObj from '../components/RoundandPick';
import PlayersFilteringWithCategory from '../components/Players';
import { addToTeam, showPlayerModal, UndoPickTeam, removeFromTeam } from '../components/teamsData';
import image6 from "../images/united.png"
import image2 from "../images/royals.png"
import image3 from "../images/janbaz.png"
import image4 from "../images/sultan.png"
import image5 from "../images/shanenawait.png"
import image1 from "../images/aces.png"
import Box from '@mui/material/Box';
import NestedModal from '../components/NestedModal';
import Countdown from 'react-countdown';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Allteam from '../components/Allteam';
import EndingPage from './EndingPage';
import List from '@mui/material/List';
import "./style.css";






// start pick and round with 1//

let i, j;
let pickGlobal = 1;
let roundGlobal = 1;


function MainPage() {
  //to navigate to end page//
  let navigate = useNavigate();
  //categories//
  const steps = [
    "Wicket Keeper",
    "Batsman",
    "Bowlers",
    "All-Rounders",
    "Emerging Talent",
    "Young Guns"
  ];

  //for updating each category after every round//
  const [currentCategory, updateCurrentCategory] = React.useState("keeper")
  //for drawer//
  const [state, setState] = React.useState({
    bottom: false,
  });

  //for updating players for each category in drawer//
  const [Players, updatePlayers] = useState([]);
  //for updating round and pick obj//
  const [roundAndPick, updateRoundAndPick] = React.useState();
  //for updating round//
  const [round, updateRound] = React.useState(1);
  //for updating pick//
  const [pick, updatePick] = React.useState(1);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //for updating name of player for modal to show which player went in which team//
  const [name, updateName] = useState("Hello")
  //for updating team logo of player for modal to show which player went in which team//
  const [logo, updateLogo] = useState(image1)

  const handleShow = () => setShow(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen(false);

  const [isOpen, toggle] = useState(false);

  function handlOpenModal(open) {

    toggle(open);
  }




  let TeamsObjGlobal = teamsData;
  let RoundAndPickObjGlobal = RoundAndPickObj;


  //for refreshing after emptying whole teams//
  //only runs on first render//
  //closing modal on first render//
  useEffect(() => {
  showPlayerModal(1)
  showPlayerModal(2)
  showPlayerModal(3)
  showPlayerModal(4)
  showPlayerModal(5)
  showPlayerModal(6)

  handleClose2();
  }, []);



  //for updating images and players for each category after each category ends//
  useEffect(() => {
    
    updateImagesOfTeams(round);
    updateRoundAndPick(RoundAndPickObjGlobal)
    currentPlayers();
    showOpacity(pick);

  }, [currentCategory])



  //to update border and focus on each pick//
  useEffect(() => {

    showOpacity(pick);




  }, [pick]);






  const currentPlayers = () => { //This function will triger once the players from the category are all picked
    updatePlayers(PlayersFilteringWithCategory(currentCategory))
  }


  //get round obj (round ,pick,teamid)  of current team//
  const getTeamNameOfCurrentPick = () => {
    let i;
    for (i = 0; i < roundAndPick.length; i++) {
      if (pick === roundAndPick[i].pick && round === roundAndPick[i].round) {
        return i;
      }
    }
  }

  function ModalTest() {
    // const [isOpen, toggle] = useState(false);

    // function handlOpenModal(open) {
    //   console.log("close modal");
    //   toggle(open);
    // }

    return (
      <div className="ModalTest">

        <Modal2 isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
          <div id="modcontent">
            {/* Updating name and logo through state */}
            <h2 id="ko" style={{ color: "#5c3aff" }}> {name} goes to </h2>
            <img width="160px" src={logo} />
          </div>
        </Modal2>
      </div>
    );
  }




  const playerSelected = (index) => { //Function will be trigerred once the player is picked
    //so, we also have to update pick no and round no if it surpasses 6(no. of teams)

    //get index of round and pic to know which team has selected player
    const temp = getTeamNameOfCurrentPick();
    //put that name(selected player) to their respective team. this is defined in other component

    //getting currenteamid//
    let currentteamid = roundAndPick[temp].teamid;
      //to refresh modal of selected team which player went//
    showPlayerModal(currentteamid);
    let a = Players[index];
    console.log(a);


    handlOpenModal(true);
    updateName(a);


    //updating team logo through state to showw which team selected player went in// 
    for (i = 0; i < teamsData.length; i++) {
      if (currentteamid == teamsData[i].teamid) {

        updateLogo(teamsData[i].img)
      }
    }


    addToTeam(Players[index], roundAndPick[temp]);


    //this is updating redered players and shutting off drawer
    Players.splice(index, 1)
    let Players2 = Players
    updatePlayers(Players2)
    handleClose();

    //updating pick after selecting each player..
    pickGlobal++
    updatePick(pick + 1)


    if (pickGlobal === 7 || pick === 7) {
      //if its last round ,then after last pick navigate to ending page//
      if (round == 13) {
        console.log('p')
        navigate('/end');
      }
      else {
        updatePick(1)
        roundGlobal = roundGlobal + 1;
        pickGlobal = 1
        updateRound(round + 1);
        console.log(round);
        console.log(round);
        //updating rounds images and picks after each round//

        let k = round + 1
        updateImagesOfTeams(k);
        updateRoundAndPick(RoundAndPickObjGlobal)
      }


    }

    //it will change category and useeffect will call currentPlayers() and names will be updated of next category
    if (Players.length === 0) {
        // if all players selected from current category move to next category//

      if (currentCategory === 'keeper') {
        updateCurrentCategory("batsman")

        // currentPlayers(); //it will be called from use effect as the function will be trigerred beacause
        //state is changing value

      }
      else if (currentCategory == 'batsman') {
        updateCurrentCategory("bowlers")
        // currentPlayers();
      }
      else if (currentCategory == 'bowlers') {
        updateCurrentCategory("allrounders")
        // currentPlayers();
      }
      else if (currentCategory == 'allrounders') {
        updateCurrentCategory("emerging")
        // currentPlayers();
      }
      else if (currentCategory === 'emerging') {
        updateCurrentCategory("youngguns")
      }

    }
  }

  //Undo last pick incase of mistake//
  const UndoPick = () => {
    let i = getTeamNameOfCurrentPick();
    let m = i - 1;
    //getting previous teamid//
    let previousteamid = roundAndPick[m].teamid;
    //getting previous teamid//
    let k = previousteamid - 1;
    //getting array length of players of previous teamid//
    let len = teamsData[k].players.length;
    // wapsi add player in drawer which you selected since you want to undo//
    let addPlayer = teamsData[k].players[len - 1];
    updateImagesOfTeams(roundAndPick[m].round);
    //remove from both teams array in code and in database//
    removeFromTeam(roundAndPick[m]);
    showPlayerModal(previousteamid);
    //pushing into drawer//
    Players.push(addPlayer)
    //decrementing pick since it is undo pick//
    let j = pick - 1;
    pickGlobal = j;
    updatePick(j);
    showOpacity(j);

  }




  function OffCanvasExample({ name, ...props }) {


    return (
      <>
        {/* undo pick on reload icon */}
        <span id="teambtn" onClick={UndoPick}>
          <FontAwesomeIcon icon={faRotateLeft} />
        </span>
        <Button variant="dark" style={{ width: "150px", marginTop: "15px" }} onClick={handleShow} className="me-2">
          Pick
        </Button>
          {/* close on first render but will open when needed */}
        <button id="modalbtn" ><NestedModal /></button>


        <Offcanvas className="canvas" show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ marginLeft: "45%" }}><b style={{ textTransform: "uppercase" }}>{currentCategory}</b></Offcanvas.Title>

          </Offcanvas.Header>
          <Offcanvas.Body className="canvasbody">
            <div className="selector">
              <List>
                {/* Mapping players  and putting them into drawer */}
                {Players.map((value, index) => (
                  <Button variant="primary" id="player" onClick={() => { playerSelected(index) }

                  } >{value}</Button>

                ))}
              </List>
            </div>
            <Countdown id="timer" date={Date.now() + 30000} renderer={renderer} />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }




  const Completionist = () => <span id="timer2">You are good to go!</span>;
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span id="timer">{seconds}</span>;
    }
  };


  const list = (anchor) => (

    <Box

      sx={{ width: '100%', height: '320px' }}
      role="presentation"
    >


    {/* Drawer popup from bottom */}
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={"bottom"} name={placement} />
      ))}
    </Box>
  );







  return (
    <>

      <br /><br /><br />
      <h3 align="left">Round : {round}</h3>
      <h3>Pick Order</h3>
      <br /><br />



      <Container>


        <Row xs={2} md={4} lg={6}>
          <div>

            <Col><img className="images" style={{ opacity: "40%" }} src={image1} /></Col>

          </div>

          <div>
            <Col><img className="images" style={{ opacity: "40%" }} src={image2} /></Col>
          </div>

          <div>
            <Col><img className="images" style={{ opacity: "40%" }} src={image3} /></Col>
          </div>

          <div>
            <Col><img className="images" style={{ opacity: "40%" }} src={image4} /></Col>
          </div>

          <div>
            <Col><img className="images" style={{ opacity: "40%" }} src={image5} /></Col>
          </div>

          <div>
            <Col><img className="images" style={{ opacity: "40%" }} src={image6} /></Col>
          </div>

        </Row>
        {/* closed on first render but opens when needed */}
        <ModalTest/>
        <div>
          {/* showing players in drawer through func. list */}
          {list('bottom')}

        </div>

      </Container>


      <br /><br />


    </>
  );
}














export default MainPage;