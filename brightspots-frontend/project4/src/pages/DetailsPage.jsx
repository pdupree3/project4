import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const DetailsPage = ({ brightspot, classroomId }) => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    classroomId: classroomId,
  });

  const navigate = useNavigate();

  const deleteSpot = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/classroom/${id}`, formData).then(() => {
      navigate("/classroom", { replace: true });
    });
  };
  return (
    <div>
      <h1>
        {brightspot.value} {brightspot.teacher} - {brightspot.grade}
      </h1>
      <img src={brightspot.img} alt={`${brightspot.grade} ${brightspot.value} ${brightspot.teacher}`} />
      <p>{brightspot.description}</p>
      <Link to={`/classroom/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <form onSubmit={deleteSpot}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DetailsPage;
