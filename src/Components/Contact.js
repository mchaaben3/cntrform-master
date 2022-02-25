import React, { useState } from "react";

function Contact() {
  const [values, setValues] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  const handleChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value.trim()
     });
  }
  const handleSubmit = ()=> {
    
  }
  return (
    <div className="contact component__space" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Contact</h1>
              </div>
              <div className="input__box">
                <input
                  type="text"
                  value={values.name}
                  name="name"
                  className="form-control"
                  placeholder="Your name *"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                  name="email"
                  value={values.email}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write a Subject"
                  name="subject"
                  value={values.subject}
                  onChange={(e) => handleChange(e)}
                />
                <textarea
                  name="message"
                  id="message"
                  className="form-control bg-white text-dark"
                  placeholder="Write Your message"
 
                  value={values.message}
                  onChange={(e) => handleChange(e)}
                ></textarea>
                <button className="btn btn-primary"  onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col image_contact">
            <img src="./images/contact-img.png" alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
