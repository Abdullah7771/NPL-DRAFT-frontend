import image6 from "../images/united.png"
import image2 from "../images/royals.png"
import image3 from "../images/janbaz.png"
import image4 from "../images/sultan.png"
import image5 from "../images/shanenawait.png"
import image1 from "../images/aces.png";
import Allteam from "./Allteam";
import "../pages/style.css"


//Mapping and then showing each team in single teams Option//
function ShowTeamAces(props) {
    return (

        <>
            <span style={{ display: "flex" }}>
                <h4 style={{ width: "max-content" }}>Nawait Aces </h4>
                <img src={image1} class="logo" />

            </span>

            {
                Allteam(6).map((value, index) => (

                    <li className='playervalue'  > {value}</li>

                ))
            }
        </>
    )

}

function ShowTeamShaneNawait(props) {
    return (
        <>
            <span style={{ display: "flex" }}>
                <h5 className='teamname'> Shan-e-Nawait   </h5>
                <img src={image5} class="logo" />
            </span>
            {Allteam(2).map((value, index) => (

                <li className='playervalue' style={{ color: "#cb1919" }}  > {value}</li>

            ))}
        </>
    )
}

function ShowTeamSultan(props) {
    return (
        <>
            <span style={{ display: "flex" }}>
                <h5 className='teamname'>  Nawait Sultan  </h5>
                <img src={image4} class="logo" />
            </span>

            {Allteam(3).map((value, index) => (

                <li className='playervalue' style={{ color: "#134166" }}> {value}</li>

            ))}
        </>
    )
}

function ShowTeamJanbaz(props) {
    return (
        <>
            <span style={{ display: "flex" }}>
                <h5 className='teamname'>  Nawait Janbaz  </h5>
                <img src={image3} class="logo" />
            </span>
            {Allteam(4).map((value, index) => (

                <li className='playervalue' style={{ color: "#90680a" }}  > {value}</li>

            ))}
        </>
    )
}

function ShowTeamRoyals(props) {
    return (
        <>
            <span style={{ display: "flex" }}>
                <h5 className='teamname'>  Nawait Royals   </h5>
                <img src={image2} class="logo" />
            </span>

            {Allteam(5).map((value, index) => (

                <li className='playervalue' style={{ color: "#ff1709" }}  > {value}</li>

            ))}
        </>
    )
}


function ShowTeamUnited() {
    return (
        <>
            <span style={{ display: "flex" }}>
                <h5 className='teamname'> Nawait United  </h5>
                <img src={image6} class="logo" />
            </span>
            {Allteam(1).map((value, index) => (

                <li className='playervalue' style={{ color: "#061730" }}   > {value}</li>

            ))}
        </>
    )
}

export { ShowTeamAces, ShowTeamRoyals, ShowTeamJanbaz, ShowTeamSultan, ShowTeamShaneNawait, ShowTeamUnited }

