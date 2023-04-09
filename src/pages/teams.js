import React from 'react'

import team1 from "../images/united.png"
import team2 from "../images/shanenawait.png"
import team3 from "../images/sultan.png"
import team4 from "../images/janbaz.png"
import team5 from "../images/royals.png"
import team6 from "../images/aces.png"
import { Link } from 'react-router-dom';
import {BASE_URL} from "../App"
import "../App";



//Emptying All teams from database to start a new draft with new players //
const EmptyTeams = async (id) => {
  const data = await fetch("https://npl-draft-backend.onrender.com/api/team/delete", {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',

  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      return result
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}





function Teams() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-1 mx-auto">
          <div className="flex flex-wrap w-full  flex-col items-center text-center">
            <br/>
            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Teams</h1>
          
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={team4} />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Nawait Janbaz</h2>
                <p className="leading-relaxed text-base" style={{fontWeight:"bold"}}>Captain : Shiror Faizan </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={team2} />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shan-e-Nawait</h2>
                <p className="leading-relaxed text-base" style={{fontWeight:"bold"}}>Captain : Khattal Noor-ul-Hasan</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={team5} />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Nawait Royals</h2>
                <p className="leading-relaxed text-base" style={{fontWeight:"bold"}}>Captain : Hegdey Saad</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={team3} />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Nawait Sultans</h2>
                <p className="leading-relaxed text-base" style={{fontWeight:"bold"}}>Captain : Khatib Munif</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={team1} />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Nawait United</h2>
                <p className="leading-relaxed text-base" style={{fontWeight:"bold"}}>Captain : Dhinda Sufiyan</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img src={team6} />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Nawait Aces</h2>
                <p className="leading-relaxed text-base" style={{fontWeight:"bold"}}>Captain : Sunny Adnan</p>
              </div>
            </div>
          </div>
          {/* to empty teams on click before starting draft */}
          <Link to="/round"><button onClick={EmptyTeams} className="flex mx-auto mt-7 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start</button></Link>
        </div>
      </section>




    </div>
  );
}

export default Teams