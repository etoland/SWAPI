import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import People from "./People";
import Star from "./Star.png";
import Logo from "./Logo.png";

const HomePage = ({ people }) => {
  return (
    <div>
      <Img src={Star} />
      <Div>
        <NavBar />
      </Div>
      <Other src={Logo} />
      <OtherDiv>
        <People />
      </OtherDiv>
    </div>
  );
};

const Other = styled.img`
  position: absolute;
  right: 550px;
  width: 30%;
`;
const Img = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const Div = styled.div``;

const OtherDiv = styled.div`
  margin-left: 130px;
  margin-top: -150px;
`;

export default HomePage;
