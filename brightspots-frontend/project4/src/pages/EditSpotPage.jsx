import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #c0ffee;
  border-radius: 20px;
  box-sizing: border-box;
  box-align: center;
  margin: auto;
  height: 500px;
  padding: 20px;
  width: 320px;
  margin-top: 30px;
  
  .title{
  color: solid black;
  font-family: 'Gill Sans';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  align-items: top;
  };
  .button {
  background-color: #08d;
  border-radius: 20px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 150px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
};
.button:active {
  background-color: #06b;
};
.inputfield {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
  text-align: center
};
.inputfield1 {
  display: flex;
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 50%;
  outline: 0;
  padding: 4px 40px 0;
  width: 100%;
  text-align: center;
};
`;

const EditSpotPage = ({ brightspot, classroom, setbrightspot, brightspotId }) => {
  let { id } = useParams(); //Used in the handleSubmit function
  let navigate = useNavigate();

  const initialState = {
    value: brightspot.value,
    teacher: brightspot.teacher,
    grade: brightspot.grade,
    img: brightspot.img,
    action: brightspot.action,
    classroomId: classroom._id,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:4000/classroom/${id}/edit`, formData); //I believe this is the URL we would use but please adjust if necessary
    setbrightspot({
      value: formData.value,
      teacher: formData.teacher,
      grade: formData.grade,
      img: formData.img,
      action: formData.action,
      _id: brightspotId,
    });
    navigate(`/classroom/${id}`, { replace: true }); //Maybe change the redirect here if necessary

    // setFormData(initialState);
    // setbrightspots(res.data);
  };

  // useEffect(() => {
  //   axios.get(`http://localhost:4000/classroom/${id}`).then((res) => {
  //     setFormData(res.data);
  //   });
  // }, []);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <div class="title">Edit brightspot</div>
        <label htmlFor="value">value</label>
        <input
          id="value"
          name="value"
          type="text"
          class="inputfield1"
          value={formData?.value}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="teacher">teacher</label>
        <input
          id="teacher"
          name="teacher"
          type="text"
          class="inputfield"
          value={formData?.teacher}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="grade">grade</label>
        <input
          id="grade"
          name="grade"
          type="text"
          class="inputfield"
          value={formData?.grade}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="img">Image</label>
        <input
          id="img"
          name="img"
          type="text"
          class="inputfield"
          value={formData?.img}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="action">action</label>
        <input
          id="action"
          name="action"
          type="text"
          class="inputfield"
          value={formData?.action}
          onChange={handleChange}
        />
      </div>

      <input class="button" type="submit" value="Edit brightspot" />
    </StyledForm>
  );
};
export default EditSpotPage;
