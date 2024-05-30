import "./App.css";
import Form from "./components/usestate/Form.jsx";
import WhoAmI from "./components/usestate/WhoAmI.jsx";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div className="App">
  
      <Form setFormData={setFormData} />

      <WhoAmI formData={formData} />
    </div>
  );
}

export default App;
