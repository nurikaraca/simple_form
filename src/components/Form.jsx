import { useState } from "react";
import "./Form.css";

const Form = () => {



  return (
    <div className="form-container">
      <form className="form">
        <h1>using useState</h1>
        <label className="form_label" htmlFor="name">
          Name
        </label>
        <input
          className="form_input"
          type="text"
          id="name"
          placeholder="Your Name"
          
        />

        <label className="form_label" htmlFor="surname">
          Surname
        </label>
        <input
          className="form_input"
          type="text"
          id="surname"
          placeholder="Your Surname"
        />

        <label className="form_label" htmlFor="username">
          Username
        </label>
        <input
          className="form_input"
          type="text"
          id="username"
          placeholder="Your username"
        />

        <label className="form_label" htmlFor="email">
          Email
        </label>
        <input
          className="form_input"
          type="email"
          id="email"
          placeholder="Your email"
        />
        <label className="form_label" htmlFor="gender">
          Gender
        </label>
        <input className="form_input" id="gender" placeholder="Your gender" />

        <button className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
