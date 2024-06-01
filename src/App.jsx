import "./App.css";
import Form from "./components/usestate/Form.jsx";
import WhoAmI from "./components/usestate/WhoAmI.jsx";
import { useReducer, useState } from "react";
import UseReducerFrom from "./components/usereducer/UseReducerForm.jsx";
import UseReducerWhoAmI from './components/usereducer/UseReducerWhoAmI.jsx'
import { formReducer, initialFormState} from "./components/usereducer/reducer.js"

function App() {
  const [formData, setFormData] = useState({});
  const [state, dispatch] = useReducer(formReducer,initialFormState);

  return (
    <div className="App">
      <div className="content-container">
        <div className="left-content">
          <Form setFormData={setFormData} />
          <WhoAmI formData={formData} />
        </div>
        <div className="border-content"></div>
        <div className="right-content">
          <UseReducerFrom  state={state} dispatch={dispatch} />
          <UseReducerWhoAmI state={state} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
