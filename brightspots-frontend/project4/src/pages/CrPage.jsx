import React, { useEffect } from "react";
import axios from "axios";
import Brightspot from "../components/Brightspot";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledForm = styled.form`

  button {
  background-color: #08d;
  border-radius: 20px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
  width: 4vm;
};
button:active {
  background-color: #06b;
};
span {

}
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`


const CrPage = ({ user, setClassroom, classroom, brightspots, setBrightspots, setBrightspot }) => {
  useEffect(() => {
    user &&
      axios
        .get(`http://localhost:4000/classroom?owner=${user._id}`)
        .then(({ data }) => {
          setClassroom(data);
          setBrightspots(data.brightspots);
        });
  }, []);

  return (
    <div class="container">
      <h1>{user.name}'s Brightspots</h1>
      <StyledForm>
      <button>
        <Link to="/classroom/new-brightspot" classroom={classroom}>
          New Brightspot
        </Link>
      </button>
      
      
      {brightspots.map((w) => {
        return (
          <span>
            <Brightspot
              key={w._id}
              id={w._id}
              img={w.img}
              grade={w.grade}
              value={w.value}
              teacher={w.teacher}
              action={w.action}
              setBrightspot={setBrightspot}
            />
          </span>
        );
      })}
      </StyledForm>
    </div>
    
  );
};

export default CrPage;
