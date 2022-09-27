import './Contact.css'
import React from 'react'

function Contact() {
  return (
    <div>
       <div className="container about-container">
        <div className="section-title ">
          <h2 className="section-title-head m-auto">Contacts</h2>
        </div>
        <div>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, rerum! Explicabo possimus
            officia, quasi quaerat sit laudantium enim, quae cumque cum voluptatem dolorum quod qui,
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7066.031072029193!2d85.3451355!3d27.685914700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1648032672250!5m2!1sen!2snp" width="100%" height={350} style={{border: 0}} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-1">
            <div className>
              <p className="icon-main"><i className="fa-solid fa-location-dot" /></p>
              <br />
              <p className="icon-main1"><i className="fa-solid fa-envelope" /></p>
              <br />
              <p className="icon-main2"><i className="fa-solid fa-mobile-screen-button" /></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <h4>Location:</h4>
              <p>A108 Adam Street,Ney York,NY 535022</p>
            </div>
            <div>
              <h4>
                Email:
              </h4>
              <p>
                info@example.com
              </p>
            </div>
            <div>
              <h4>
                Call
              </h4>
              <p>
                +123 456 789
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-input-div">
                    <input type="text" placeholder="Your Name" className="contact-input" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-input-div">
                    <input type="text" placeholder="Your Email" className="contact-input" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mt-3">
                  <div className="contact-input-div">
                    <input type="text" placeholder="subject" className="contact-input" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mt-3">
                  <div className="contact-input-div">
                    <div className="col-lg-12">
                      <textarea name="Message" placeholder="message" id className="contact-input" cols={10} rows={5} defaultValue={""} />
                    </div>
                  </div>
                  <div className="justify item center">
                    <button type="button" className="btn btn-info"> Send Message </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
