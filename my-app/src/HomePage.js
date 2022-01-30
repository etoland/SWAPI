import React from "react";
import styled from "styled-components";
import SWAP from "./SWAPI.png";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div>
      <Div>
        <NavBar />
      </Div>
      <OtherDiv>
        <Img src={SWAP} />
      </OtherDiv>
    </div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const OtherDiv = styled.div``;

const Img = styled.img`
  position: relative;
  display: flex;
  margin-left: 420px;
  margin-top: 250px;
`;

export default HomePage;
