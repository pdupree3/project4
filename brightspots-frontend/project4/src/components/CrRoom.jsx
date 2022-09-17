import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const CrRoom = ({
  name,
  img,
  teacher,
  id,
  brightspots,
  setPeerRoom,
  setPeerSpots,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setPeerRoom({
      name: name,
      img: img,
      teacher: teacher,
      _id: id,
      brightspots: brightspots,
    });
    console.log(brightspots);
    setPeerSpots(brightspots);
  };

  return (
    <div>
      <Link to={`/peer-classroom/${id}`} onClick={handleClick}>
        <img src={img} alt={name} />
      </Link>
      <Link to={`/peer-classroom/${id}`} onClick={handleClick}>
        <h3>{name}</h3>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default CrRoom;
