import React from 'react'
import NestedModal from '../components/NestedModal';
import img1 from "../images/end.jpg";



const EndingPage = () => {
  return (
    <>
      <div>
        <img src={img1} style={{ backgroundSize: 'cover' }} />
        <div style={{ position: 'absolute', top: '40%', left: "43%", color: "white" }}>
          <h1 style={{ fontWeight: "bolder" }}>Draft Ended</h1>
          <h1 style={{ fontWeight: "bolder" }}>Thank You!</h1>
          <div>
            {/* Show Players Modal for End */}
            <NestedModal color="white" />
          </div>



          <br />

        </div>
      </div>
    </>
  )
}

export default EndingPage;
