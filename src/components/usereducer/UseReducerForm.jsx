import "../Form.css";
import React, { useReducer, useState } from "react";
import { initialFormState } from "./reducer";

const UseReducerForm = ({ state, dispatch }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_FORM_DATA", payload: formData });
    setFormData(initialFormState);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>using useReducer</h1>
        <label className="form_label" htmlFor="name">
          Name
        </label>
        <input
          className="form_input"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name || ""}
          onChange={handleInputChange}
        />

        <label className="form_label" htmlFor="surname">
          Surname
        </label>
        <input
          className="form_input"
          type="text"
          id="surname"
          name="surname"
          placeholder="Your Surname"
          value={formData.surname || ""}
          onChange={handleInputChange}
        />

        <label className="form_label" htmlFor="username">
          Username
        </label>
        <input
          className="form_input"
          type="text"
          id="username"
          placeholder="Your username"
          name="username"
          value={formData.username || ""}
          onChange={handleInputChange}
        />

        <label className="form_label" htmlFor="email">
          Email
        </label>
        <input
          className="form_input"
          type="email"
          id="email"
          placeholder="Your email"
          name="email"
          value={formData.email || ""}
          onChange={handleInputChange}
        />
        <label className="form_label" htmlFor="gender">
          {" "}
          Select your Gender
        </label>
        <div className="form_gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleInputChange}
              checked={formData.gender === "male"}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleInputChange}
              checked={formData.gender === "female"}
            />{" "}
            Female
          </label>
        </div>

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseReducerForm;
