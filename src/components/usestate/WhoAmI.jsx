import React from "react";
import "./WhoAmI.css";

const WhoAmI = ({ formData }) => {

  if (!formData.data || Object.keys(formData.data).length === 0) {
    return <div style={{marginTop:"19px", color:"white", textAlign:"center"}}>No data available</div>;
  }
  return (
    <div className="formDataList">
      <h2>Who Am I</h2>
      <p>Name: {formData.data?.name}</p>
      <p>Surname: {formData.data?.surname}</p>
      <p>Username: {formData.data?.username}</p>
      <p>Email: {formData.data?.email}</p>
      <p>Gender: {formData.data?.gender}</p>
    </div>
  );
};

export default WhoAmI;
