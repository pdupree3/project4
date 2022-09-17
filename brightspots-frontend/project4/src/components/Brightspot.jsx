import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";

const SpotList = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

const Brightspot = ({ img, grade, value, teacher, id, setBrightspot, action }) => {
  const handleClick = () => {
    setBrightspot({
      img: img,
      grade: grade,
      value: value,
      teacher: teacher,
      action: action,
      _id: id,
    });
  };
  return (
    <div>
      <SpotList>
        <Link to={`/classroom/${id}`} onClick={handleClick}>
          <img src={img} />
        </Link>
        <Link to={`/classroom/${id}`} onClick={handleClick}>
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

export default Brightspot;
