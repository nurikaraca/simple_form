import React from "react";
import "./WhoAmI.css";

const UseReducerWhoAmI = ({state, dispatch}) => {
  

 if (!state.name) {
     return <div style={{marginTop:"19px", color:"white", textAlign:"center"}}>No data available</div>;
  }
  return (
    <div className="formDataList">
      <h2>Who Am I</h2>
      <p>Name: {state.name}</p>
     <p>Surname: {state.surname}</p>
      <p>Username: {state.username}</p>
      <p>Email: {state.email}</p>
      <p>Gender: {state.gender}</p> 
    </div>
  );
};

export default UseReducerWhoAmI;
