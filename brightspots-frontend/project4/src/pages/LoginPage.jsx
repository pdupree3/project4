import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: green;
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
  background-color: #34f;
  border-radius: 20px;
  border: 0;
  box-sizing: border-box;
  color: #aaa;
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
  color: #aaa;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}
label {
}
`;

const LoginPage = ({ setUser, user }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => [
    setFormData({ ...formData, [e.target.id]: e.target.value }),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post(`http://localhost:3000/login`, formData)
    .then((res) => {
      if (res.status === 200) {
        setUser(res.data);
        navigate("/classroom");
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <StyledForm onSubmit={handleSubmit}>
        <div class="title">Sign in to view your classroom!</div>
        <label htmlFor="name">Username:</label>
        <input type="text" name="username" id="name" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        
        <button type="submit">submit</button>
      </StyledForm>
    </div>
  );
};

export default LoginPage;
