import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <StyledBar>
        <div>
          <StyledLink to="/"></StyledLink>
        </div>
        <div>
          <StyledNavLink to="/planets">Planets</StyledNavLink>
          <StyledNavLink to="/starships">Starships</StyledNavLink>
        </div>
      </StyledBar>
    </div>
  );
};

const StyledBar = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  top: 30px;
  left: 350px;
  justify-content: space-between;
  padding: 20px;
  &:hover {
    text-shadow: 0 0 3px #ffe205, 0 0 7px #ffe205, 0 0 20px #edd205;
    color: #ffe205;
    border-radius: 20px;
  }
`;
export default NavBar;
