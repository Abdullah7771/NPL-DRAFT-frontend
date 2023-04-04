import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faRotateLeft, faSolid, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

import "../pages/style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Allteam from './Allteam';
import image6 from "../images/united.png"
import image2 from "../images/royals.png"
import image3 from "../images/janbaz.png"
import image4 from "../images/sultan.png"
import image5 from "../images/shanenawait.png"
import image1 from "../images/aces.png"

import { ShowTeamAces, ShowTeamRoyals, ShowTeamJanbaz, ShowTeamSultan, ShowTeamShaneNawait, ShowTeamUnited } from "./singleteammodal"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <div>
                 {/* Modal for All Teams Showing */}
                <Button variant="dark" style={{ backgroundColor: "#212529", width: "100%", color: "white" }} onClick={handleOpen} >All teams</Button>


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} id="modalbox">
                        <Container>
                            <Row xs={2} md={4} lg={6}>
                                <div>

                                    <ol start="1">
                                        <h5 className='teamname'>Nawait United</h5>
                                    {/* Mapping onto team array coming from func */}
                                        {Allteam(1).map((value, index) => (

                                            <li className='playervalue1' > {value}</li>

                                        ))}
                                    </ol>
                                </div>

                                <div>

                                    <ol start="1">
                                        <h5 className='teamname'>Shan-e-Nawait</h5>
                                         {/* Mapping onto team array coming from func with teamid */}
                                        {Allteam(2).map((value, index) => (

                                            <li className='playervalue1'  > {value}</li>

                                        ))}
                                    </ol>

                                </div>

                                <div>


                                    <ol start="1">
                                        <h5 className='teamname'>Nawait Sultans</h5>
                                        {Allteam(3).map((value, index) => (

                                            <li className='playervalue1'  > {value}</li>

                                        ))}

                                    </ol>
                                </div>

                                <div>


                                    <ol start="1">
                                        <h5 className='teamname'>Nawait Janbaz</h5>
                                        {Allteam(4).map((value, index) => (

                                            <li className='playervalue1'  > {value}</li>

                                        ))}

                                    </ol>
                                </div>

                                <div>

                                    <ol start="1">
                                        <h5 className='teamname'>Nawait Royals</h5>
                                        {Allteam(5).map((value, index) => (

                                            <li className='playervalue1'  > {value}</li>

                                        ))}

                                    </ol>
                                </div>

                                <div>


                                    <ol start="1">
                                        <h5 className='teamname'>Nawait Aces</h5>
                                        {Allteam(6).map((value, index) => (

                                            <li className='playervalue1'  >  {value}</li>

                                        ))}

                                    </ol>
                                </div>

                            </Row>
                            <div>
                            </div>

                        </Container>
                    </Box>
                </Modal>
            </div>

        </React.Fragment>
    );

}



function ChildModal2() {
    const [open, setOpen] = React.useState(false);
    const handleOpen2 = () => {
        setOpen(true);
    };
    const handleClose2 = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <div>
                {/* Modal for Single Team Showing */}
                <Button variant="dark" style={{ backgroundColor: "#212529", color: "white", width: "100%", marginTop: "15px" }} onClick={handleOpen2} > Single team</Button>


                <Modal
                    open={open}
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} id="modalbox">
                        <Container id="logomodaldiv">


                            <Row xs={2} md={4} lg={6}>
                                <div >
                                    <Col><img className="images" src={image1} />
                                    {/* Passing Component As Props */}
                                        <ChildModal3 componentToPassDown={<ShowTeamAces />} />
                                    </Col>

                                </div>

                                <div>
                                    <Col><img className="images" src={image2} /></Col>
                                     {/* Passing Component As Props */}
                                    <ChildModal3 componentToPassDown={<ShowTeamRoyals />} />
                                </div>

                                <div>
                                    <Col><img className="images" src={image3} /></Col>
                                    <ChildModal3 componentToPassDown={<ShowTeamJanbaz />} />
                                </div>

                                <div>
                                    <Col><img className="images" src={image4} /></Col>
                                    <ChildModal3 componentToPassDown={<ShowTeamSultan />} />
                                </div>

                                <div>
                                    <Col><img className="images" src={image5} /></Col>
                                    <ChildModal3 componentToPassDown={<ShowTeamShaneNawait />} />
                                </div>

                                <div>
                                    <Col><img className="images" src={image6} /></Col>
                                    <ChildModal3 componentToPassDown={<ShowTeamUnited />} />
                                </div>

                            </Row>
                        </Container>
                    </Box>
                </Modal>
            </div>

        </React.Fragment>
    );

}



function ChildModal3({ componentToPassDown }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen3 = () => {
        setOpen(true);
    };
    const handleClose3 = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <div>
                {/* Single Team Showing Button */}
                <Button id="showTeam" style={{ width: "150px" }} onClick={handleOpen3} > Show Team</Button>


                <Modal
                    open={open}
                    onClose={handleClose3}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} id="teammodal">
                        <Container >



                            <div>
                            {/* Getting Team Component Through Props and showing that team */}
                                {componentToPassDown}

                            </div>


                        </Container>
                    </Box>
                </Modal>
            </div>

        </React.Fragment>
    );

}










export default function NestedModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        
        <div>
            {/* Real Parent Modal .Two Options After Clicking: 1)All teams 2)Single Team */}
            <span id="teambtn" onClick={handleOpen}>
                <FontAwesomeIcon color={props.color} icon={faPeopleGroup} />
            </span>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>

                    <ChildModal />
                    <ChildModal2 />

                </Box>
            </Modal>
        </div>
    );
}


export { ChildModal3, ChildModal2 }