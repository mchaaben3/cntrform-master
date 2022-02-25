import React from 'react'

const Formation = () => {
  return (

    <div className={`col-sm-12 col-md-6 col-lg-4 mt-4`}>
    <div className="card p-3 rounded">
        <img
            className="card-img-top mx-auto"
            src="http://dealka.tn/wp-content/uploads/2017/07/photo-facebook-V4-min.png"
        />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              Formations anglais
            </h5>
         
            <p className="card-text">$ 100</p>
            <button id="view_btn" className="btn btn-block">View Details</button>
        </div>
    </div>
</div>
 
  )
}

export default Formation

 {/*
      <div className="card  text-white  carousel-item  w-100">

    <video src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4" autoPlay loop></video>
  <div className="card-img-overlay">
    <h5 className="card-title">Full Stack Javascript</h5>
    <p className="card-text"></p>
    <p className="card-text"></p>
  </div>
  </div>
  */}
