import React, { useEffect } from "react";
import axios from "axios";
import CrRoom from "../components/CrRoom";
import styled from "styled-components";

const StyleDiv = styled.div`
  margin-top: 30px;
`;

const SchoolPage = ({
  classrooms,
  setClassrooms,
  setPeerRoom,
  setPeerSpots,
  peerRoom,
  peerSpots,
}) => {
  useEffect(() => {
    axios
      .get("http://localhost:4000/classrooms")
      .then(({ data }) => setClassrooms(data));
  }, []);

  return (
    <StyleDiv>
      {classrooms.map((c) => {
        return (
          <Garage
            key={c._id}
            name={c.name}
            img={c.img}
            id={c._id}
            brightspots={c.brightspots}
            teacher={c.teacher}
            setPeerRoom={setPeerRoom}
            peerRoom={peerRoom}
            setPeerSpots={setPeerSpots}
            peerSpots={peerSpots}
          />
        );
      })}
    </StyleDiv>
  );
};

export default SchoolPage;
