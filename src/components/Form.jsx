import "./Form.css"

const Form = () => {
  return (
  <div className="form-container">
      <form className="form">
        <label className="form_label" htmlFor="name">Name</label>
        <input className="form_input" type="text" id="name" />

        <label className="form_label" htmlFor="surname">Surname</label>
        <input className="form_input" type="text" id="surname" />
    </form>
  </div>
  )
}

export default Form