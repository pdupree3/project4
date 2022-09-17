import React from "react";

const PeerDetailsPage = ({ brightspot }) => {
  return (
    <div>
      <h1>
        {brightspot.value} {brightspot.teacher} - {brightspot.grade}
      </h1>
      <img src={brightspot.img} alt={`${brightspot.grade} ${brightspot.value} ${brightspot.teacher}`} />
      <p>{brightspot.description}</p>
    </div>
  );
};

export default PeerDetailsPage;
