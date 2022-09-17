import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

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
  height: 300px;
  padding: 20px;
  width: 320px;
  .title{
  color: solid black;
  font-family: 'Gill Sans';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  align-items: top;
  };
  button {
  background-color: #08d;
  border-radius: 20px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 150px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
};
button:active {
  background-color: #06b;
};
input {
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
};
`

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.password) {
      alert("Fields cannot be empty");
    } else if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match");
    } else {
      axios.post(`http://localhost:4000/signup`, formData).then((res) => {
        navigate("/login");
      });
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Username:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Sign Up</button>
      </StyledForm>
    </div>
  );
};

export default SignUpPage;
