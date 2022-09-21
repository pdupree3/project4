import {Route, Routes,Navigate, useNavigate } from "react-router-dom";
import {useState, useEffect, useSyncyExternalStroe } from "react";
import styled from "styled-components";
import './App.css';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CrPage from "./pages/CrPage";
import SchoolPage from "./pages/SchoolPage"
import NavBar from "./components/NavBar";
import NewSpot from "./components/NewSpot";
import NewSpotPage from "./pages/NewSpotPage";
import axios from "axios";
import DetailsPage from "./pages/DetailsPage";
import EditSpotPage from "./pages/EditSpotPage";
import PeerRoomPage from "./pages/PeerRoomPage";
import PeerDetailsPage from "./pages/PeerDetailsPage"




function App() {
  const [user, setUser] = useState({});
  
  const [classroom, setClassroom] = useState({});
  
  const [brightspots, setBrightspots] = useState({});
  
  const [brightspot, setBrightspot] = useState({});
  
  const [school, setSchool] = useState({});
  
  const [peerroom, setPeerroom] = useState({});
  
  const [peerspots, setPeerspots] = useState({});
  
  const [peerspot, setPeerspot] = useState({});

 
 
 
 
 
 
 
 
 
 
 
 
  const handleLogout = () => {
    setUser({});
    setClassroom({});
  };
  
  const navigate = useNavigate();
  
  return (

    <div className="App">
      <NavBar handleLogout={handleLogout} user={user} />
      <Routes>
        <Route
          path="/login"
          element = {
            <LoginPage setUser = {setUser} setClassroom = {setClassroom} user = {user} />
          }
          />
        <Route path = "/signup" element = {<SignUpPage />} />
        <Route
          path = "/classroom"
          element= {
            !user._id ? (
              <Navigate to = "/login" replace />
             ) : (
              <CrPage
                user = {user}
                setClassroom={setClassroom}
                classroom = {classroom}
                setBrightspots = {setBrightspots}
                brightspots = {brightspots}
                setBrightspot = {setBrightspot}
                />

             )
          }
          />
          <Route
            path = "/classroom/:id"
            element = {
              !user.id ? (
                <Navigate to= "/login" replace />
              ) : (
                <DetailsPage brightspot={brightspot} classroomId = {classroom._id} />
              )
            }
            />
          <Route
            path = "classroom/:id/edit"
            element = {
              !user.id ? (
                <Navigate to = "/login" replace />
              ) : (
                <EditSpotPage
                  brightspot = {brightspot} 
                  classroom = {classroom}
                  setBrightspot = {setBrightspot}
                  brightspotId = {brightspot._id}
                  />
              )
            }
            />

          <Route 
            path = "classroom/new-brightspot"
            element = {
              !user._id ? (
                <Navigate to="/login" replace />
              ) : (
                <NewSpotPage classroom = {classroom} />
              )
            }
            />
            <Route 
              path = "/school"
              element = {
                !user._id ? (
                  <Navigate to = "/login" replace />
                ) : (
                  <SchoolPage
                  school = {school}
                  setSchool = {setSchool}
                  setPeerroom = {setPeerroom}
                  setPeerspots = {setPeerspots}
                  peerspots = {peerspots}
                  peerroom = {peerroom}
                  />
                )
              }
              />
          <Route
          path = "/peer-classroom/:id"
          element = {
            !user._id ? (
              <Navigate to = "/login" replace />
              ) : (
                <PeerRoomPage
                  peerClassroom = {peerroom}
                  peerspot = {peerspot}
                  setPeerspot = {setPeerspot}
                  />
              )
          }
          />
          <Route
            path = "/peer-classroom/:id/details"
            element = {
              !user._id ? (
                <Navigate to = "/login" replace />
              ) : (
                <PeerDetailsPage brightspot = {peerspot} />
              )
            }
            />
          <Route 
            path = "*" element = {<Navigate to = "/login" replace />} />
      </Routes>
    </div>
    
  );
}

export default App;
