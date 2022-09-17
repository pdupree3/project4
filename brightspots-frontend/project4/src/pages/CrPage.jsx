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
        .get(`http://localhost:3000/classroom?owner=${user._id}`)
        .then(({ data }) => {
          setClassroom(data);
          setBrightspots(data.brightspots);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
      
      
      {brightspots.map((b) => {
        console.log(brightspots)
        return (
          <span>
            <Brightspot
              key={b._id}
              id={b._id}
              img={b.img}
              grade={b.grade}
              value={b.value}
              teacher={b.teacher}
              action={b.action}
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
