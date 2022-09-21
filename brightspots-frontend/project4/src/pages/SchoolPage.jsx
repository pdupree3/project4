import React, { useEffect } from "react";
import axios from "axios";
import CrRoom from "../components/CrRoom";
import styled from "styled-components";

const StyleDiv = styled.div`
  margin-top: 30px;
`;

const SchoolPage = ({
  school,
  setSchool,
  setPeerRoom,
  setPeerSpots,
  peerRoom,
  peerSpots,
}) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/school")
      .then(({ data }) => setSchool(data));
      // eslint-disable-next-line 
  }, []);

  return (
    <StyleDiv>
      {school.map((c) => {
        return (
          <CrRoom
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
