import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #c0ffee;
  border-radius: 20px;
  box-sizing: border-box;
  box-align: center;
  margin: auto;
  height: 500px;
  padding: 20px;
  width: 320px;
  margin-top: 30px;
  
  .title{
  color: solid black;
  font-family: 'Gill Sans';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  align-items: top;
  };

  .button {
  background-color: #08d;
  border-radius: 20px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 80px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
};
button:active {
  background-color: #06b;
};
.inputfield {
  display: flex;
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
 text-align: center;
};
.inputfield1 {
  display: flex;
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 48%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
  text-align: center;
};
.label {
  margin-bottom: 50px;
  color: grey
}
`;


const NewSpotPage = ({ addBrightspot, classroom }) => {
  const initialState = {
    value: "",
    teacher: "",
    grade: "",
    img: "",
    action: "",
    classroomId: classroom._id,
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .put(`http://localhost:3000/classroom/`, formData) 
      .then((res) => {
        setFormData(initialState);

        navigate("/classroom", { replace: true }); 
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <div className='title'>New Brightspot</div>

        
        
        <label className='label' htmlFor="value">value: </label>
        <input
          id="value"
          name="value"
          type="text"
          className= "inputfield1"
          value={formData?.name}
          onChange={handleChange}
        />
      </div>

      <br></br>
    
      <div>
        <label className='label' htmlFor="teacher">
          Teacher:{" "} 
          </label>
        <input
          id="teacher"
          name="teacher"
          type="text"
          className= "inputfield"
          checked={formData?.teacher}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label className='label' htmlFor="grade">
          Grade:{" "}
          </label>
        <input
          id="grade"
          name="grade"
          type="text"
          className= "inputfield"
          value={formData?.grade}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label className='label' htmlFor="img">
          Image: {" "} 
          </label>
        <input
          id="img"
          name="img"
          type="text"
          className= "inputfield"
          value={formData?.img}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label className='label' htmlFor="action">
          Action:{" "}
          </label>
        <input
          id="action"
          name="action"
          type="text"
          className= "inputfield"
          value={formData?.action}
          onChange={handleChange}
        />
      </div>

      <input type="submit" className='button' value="Create Brightspot" />
    </StyledForm>
  );
};

export default NewSpotPage;
