import './Portfolio.css'
import React from 'react'

function Portfolio() {
  return (
    <div>
       <div>
        <div className="container about-container">
          <div className="section-title ">
            <h2 className="section-title-head m-auto">PORTFOLIO</h2>
          </div>
          <div>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, magnam.
            </p>
          </div>
          <div className="row select-row">
            <div className="col-lg-12 d-flex justify-content-center">
              <span className="select-area-all">ALL</span> 
              <span className="select-area">WEB</span>
              <span className="select-area">CARD</span>
              <span className="select-area">WEB</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div>
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-1.jpg" alt="" className="img-fluid" />
                </div>
                <br />
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-6.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-2.jpg" alt="" className="img-fluid" />
                </div>
                <br />
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-5.jpg" alt="" className="img-fluid" />
                </div>
                <br />
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-9.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-3.jpg" alt="" className="img-fluid" />
                </div>
                <br />
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-4.jpg" alt="" className="img-fluid" />
                </div>
                <br />
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-7.jpg" alt="" className="img-fluid" />
                </div>
                <br />
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-8.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Portfolio
