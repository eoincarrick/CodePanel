import React from "react";
import Navbar from "../components/Navbar";
import "../House/style/Contact.css";

function Contact() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="contactContainer">
        <form>
          <div className="firstAndLastName">
            <div className="inputAndFname">
              <label htmlFor="fname">First Name</label>
              <input
                className="inputs"
                type="text"
                id="fname"
                placeholder="eg. Eoin"
                required
              />
            </div>

            <div className="inputLname">
              <label htmlFor="lname">Last Name</label>
              <input
                className="inputs"
                type="text"
                id="lname"
                placeholder="eg. Carrick"
                required
              />
            </div>
          </div>

          <label htmlFor="email">E-Mail Address</label>
          <input
            className="inputs"
            type="email"
            id="email"
            placeholder="eg. examples@mail.com.."
            required
          />

          <label htmlFor="reason">Reason For Contacting Us.</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Let us know how we can help😊"
            required
          ></textarea>

          <input className="submit" type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
