import React from "react";
import "./style/Form.css";

function Form() {
  return (
    <form className="formContainer">
      <div className="formBox">
        <div className="firstAndLastName inputDiv">
          <label htmlFor="flname">Name</label>
          <input
            className="flname"
            type="text"
            id="flname"
            placeholder="Eoin Carrick"
            required
          />
        </div>

        <div className="emails inputDiv">
          <label htmlFor="email">E-Mail</label>
          <input
            className="email"
            type="email"
            id="email"
            placeholder="eoincarrick@eoin.com"
            required
          />
        </div>

        <div className=".text inputDiv">
          <label htmlFor="reason">Reason For Contacting Us.</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Let us know how we can help😊"
            required
          ></textarea>
        </div>

        <div className="inputBtn inputDiv">
          <input className="submit" type="submit" value="Submit"></input>
        </div>
      </div>
    </form>
  );
}

export default Form;
