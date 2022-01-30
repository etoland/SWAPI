import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo.png";

const NavBar = () => {
  return (
    <div>
      <StyledBar>
        <div>
          <StyledLink to="/">
            <StyledLogo src={Logo} />
          </StyledLink>
        </div>
        <div>
          <StyledNavLink to="/people">People</StyledNavLink>
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

const StyledLogo = styled.img`
  width: 10%;
  padding: 10px;
  right: 90%;
  &:hover {
    width: 12%;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #34312d;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  top: 30px;
  right: 30px;
  justify-content: space-between;
  padding: 20px;
  &:hover {
    border: 2px solid black;
    border-radius: 30px;
  }
`;
export default NavBar;
