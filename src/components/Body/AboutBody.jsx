import React from 'react'
import './AboutBody.css'

function AboutBody() {
  return (
   <>
    <div>
        <div>
          <div className="container about-container">
            <div className="section-title ">
              <h2 className="section-title-head m-auto">ABOUT</h2>
            </div>
            <div>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, rerum! Explicabo possimus
                officia, quasi quaerat sit laudantium enim, quae cumque cum voluptatem dolorum quod qui,
              </p>
            </div>
            <div className="row about-first-row">
              <div className="col-lg-4">
                <div>
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/about.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-8">
                <div>
                  <h4>Illustrator &amp; UI/UX Designer</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident modi
                    reprehenderit vel, dicta aliquam, amet beatae necessitatibus corrupti fuga possimus?
                    Sapiente repellat praesentium quo.</p>
                </div>
                <div className="row ">
                  <div className="col-lg-6">
                    <div>
                      <p><span> <b>Birthday:</b> </span>1 May 1995</p>
                      <p><span> <b>Wensite:</b> </span>www.example.com</p>
                      <p><span> <b>Phone:</b> </span>+123 456 7890</p>
                      <p><span> <b>City:</b> </span>New York,USA</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div>
                      <p><span> <b>Age:</b> </span>30</p>
                      <p><span> <b>Degree:</b> </span>Master</p>
                      <p><span> <b>phEmailone:</b> </span>www.example.com</p>
                      <p><span> <b>Freelance:</b> </span>Available</p>
                    </div>
                  </div>
                  <div>
                    <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt
                      adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                      Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus
                      itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                      culpa magni laudantium dolores.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  skills section */}
        <div className="container">
          <div className="section-title ">
            <h2 className="section-title-head m-auto">SKILLS</h2>
          </div>
          <div>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, rerum! Explicabo possimus
              officia, quasi quaerat sit laudantium enim, quae cumque cum voluptatem dolorum quod qui,
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div>
                <div className="clearfix">
                  <p className="text-left"> HTML</p>
                  <p className="text-right"> 100%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '100%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="clearfix">
                  <p className="text-right"> CSS </p>
                  <p className="text-left"> 100%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '90%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="clearfix">
                  <p className="text-left"> JavaScript</p>
                  <p className="text-right"> 100%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '70%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <div className="clearfix">
                  <p className="text-left"> PHP</p>
                  <p className="text-right"> 80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="clearfix">
                  <p className="text-right"> WORDPRESS/CSS</p>
                  <p className="text-left"> 90%%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '90%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="clearfix">
                  <p className="text-left"> Photoshop</p>
                  <p className="text-right"> 55%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '55%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Facts-section */}
        <div className="container about-container">
          <div className="section-title ">
            <h2 className="section-title-head m-auto">FACTS</h2>
          </div>
          <div>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, rerum! Explicabo possimus
              officia, quasi quaerat sit laudantium enim, quae cumque cum voluptatem dolorum quod qui,
            </p>
          </div> 
          <div className="row">
            <div className="col-lg-3">
              <div className="facts-num">
                <span className="facts-number">232</span><br />
                <p>Clients</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="facts-num">
                <span className="facts-number">521</span><br />
                <p>Project</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="facts-num">
                <span className="facts-number">1463</span><br />
                <p>Hours of Support</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="facts-num">
                <span className="facts-number">15</span><br />
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
        {/* facts section end */}
        {/* testimonials */}
        <div className="container">
          <div className="section-title ">
            <h2 className="section-title-head m-auto">TESTIMONIALS</h2>
          </div>
          <div>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, rerum! Explicabo possimus
              officia, quasi quaerat sit laudantium enim, quae cumque cum voluptatem dolorum quod qui,
            </p>
          </div> 
          <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                <li data-target="#carouselExampleCaptions" data-slide-to={2} />
              </ol>
              <div className="carousel-inner ">
                <div className="carousel-item active testimonial ">
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-4.jpg" className=" testimonial-img" alt="first" />
                  <div className="testimonial-card ">
                    <h3>Saul Goodman</h3>
                    <h4>CEO &amp; Founder</h4>
                    <p><span className="quote"> <i className="fa-solid fa-quote-left" /></span>Some representative placeholder content for the first slide Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias beatae laboriosam perspiciatis quibusdam, fuga provident at tempore commodi tempora.. <span className="quote"><i className="fa-solid fa-quote-right" /></span></p>
                  </div>
                </div>
                <div className="carousel-item testimonial">
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="second" />
                  <div className="testimonial-card">
                    <h3>Saul Goodman</h3>
                    <h4>CEO &amp; Founder</h4>
                    <p><span className="quote"><i className="fa-solid fa-quote-left" /></span> Some representative placeholder content for the first slide Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias beatae laboriosam perspiciatis quibusdam, fuga provident at tempore commodi tempora <span className="quote"><i className="fa-solid fa-quote-right" /></span></p>
                  </div>
                </div>
                <div className="carousel-item testimonial">
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="third" />
                  <div className="testimonial-card">
                    <h3>Saul Goodman</h3>
                    <h4>CEO &amp; Founder</h4>
                    <p> <span className="quote"><i className="fa-solid fa-quote-left" /></span>Some representative placeholder content for the first slide Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias beatae laboriosam perspiciatis quibusdam, fuga provident at tempore commodi tempora.. <span className="quote"><i className="fa-solid fa-quote-right" /></span></p>
                  </div>
                </div>
                <div className="carousel-item testimonial">
                  <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="third" />
                  <div className="testimonial-card">
                    <h3>Saul Goodman</h3>
                    <h4>CEO &amp; Founder</h4>
                    <p> <span className="quote">  <i className="fa-solid fa-quote-left" /></span> Some representative placeholder content for the first slide Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias beatae laboriosam perspiciatis quibusdam, fuga provident at tempore commodi tempora.. <span className="quote"><i className="fa-solid fa-quote-right" /></span></p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default AboutBody
