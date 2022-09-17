import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PeerDetailsPage from "../pages/PeerDetailsPage";

const SpotList = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;
const PeerSpot = ({
  id,
  value,
  teacher,
  grade,
  img,
  description,
  setPeerSpot,
}) => {
  const handleClick = () => {
    setPeerSpot({
      img: img,
      grade: grade,
      value: value,
      teacher: teacher,
      description: description,
      _id: id,
    });
  };

  return (
    <div>
      <SpotList>
        <Link to={`/peer-classroom/${id}/details`} onClick={handleClick}>
          <img src={img} />
        </Link>
        <Link to={`/peer-classroom/${id}/details`} onClick={handleClick}>
          <h3>
            {value} {teacher} - {grade}
          </h3>
        </Link>
        <br />
        <br />
      </SpotList>
    </div>
  );
};

export default PeerSpot;
