import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  .logo {
    display: flex;
    height: 10%;
    width: 10%;
    border-radius: 40%;
    
  }
  
  ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style-type: none;

  li {
    padding: 6px 0;

    .nav {
      position: relative;
      display: block;
      padding: 4px 0;
      font-family: Lato, sans-serif;
      color: black;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
      margin: 0 2vw 0 0vw;

      &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background: red;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      }

      &:hover {
        color: #95a5a6;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}
  
`;

const NavBar = ({ handleLogout, user }) => {
  return (
    <div>
      <NavBarContainer>
        <ul>
          <li>
             <Link className="nav" to="/">
            <img class="logo" src="https://i.imgur.com/x2deOJC.pnghttps://clarkfoundationdc.org/wp-content/uploads/2021/07/Digital-Pioneer-Academy-Logo.jpg" alt='DPA'/>
            </Link>
          </li> 
          </ul>
         <ul>  
          <li>
          {!user._id ? (
          <Link className="nav" to="/login">
            Login
          </Link>
        ) : null}
        </li>
        <li>
        {!user._id ? (
          <Link className="nav" to="/signup">
            Sign Up
          </Link>
        ) : null}
        </li>
        <li>
        {user._id ? (
          <Link className="nav" to="/classroom">
            My classroom
          </Link>
        ) : null}
        </li>
        <li>
        {user._id ? (
          <Link className="nav" to="/classrooms">
            classrooms
          </Link>
        ) : null}
        </li>
        <li>
        {user._id ? (
          <Link className="nav" onClick={handleLogout} to="/login">
            LogOut
          </Link>
        ) : null}
        </li>
        </ul>
        <hr></hr>
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
