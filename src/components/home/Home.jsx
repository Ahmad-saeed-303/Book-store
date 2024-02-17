import React from 'react'
import FirstBook from "../../images/Quran.jpg"
import './home.css';
function Home() {
  return ( <>
   <div className=" home">
          
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure
            </p>
          </div>

          {/* <div className="slide-image-wrapper">
            <img src={FirstBook} alt="" />
          </div> */}

        </div>


    </>
  )
}

export default Home ;