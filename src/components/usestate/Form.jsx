import { useState } from "react";
import "./Form.css";

const Form = ({ setFormData }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      data: {
        name,
        surname,
        username,
        email,
        gender,
      },
    }));
    setName("");
    setSurname("");
    setUsername("");
    setEmail("");
    setGender("");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>using useState</h1>
        <label className="form_label" htmlFor="name">
          Name
        </label>
        <input
          className="form_input"
          type="text"
          id="name"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label className="form_label" htmlFor="surname">
          Surname
        </label>
        <input
          className="form_input"
          type="text"
          id="surname"
          placeholder="Your Surname"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
        />

        <label className="form_label" htmlFor="username">
          Username
        </label>
        <input
          className="form_input"
          type="text"
          id="username"
          placeholder="Your username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label className="form_label" htmlFor="email">
          Email
        </label>
        <input
          className="form_input"
          type="email"
          id="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "male"}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "female"}
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

export default Form;
