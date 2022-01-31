import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Star from "./Star.png";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("/planets")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results);
        console.log(data, "PLANETS");
      });
  }, []);
  return (
    <div>
      <Img src={Star} />
      <H1>Planets</H1>
      {planets &&
        planets.map((item) => {
          return (
            <>
              <Parent>
                <Ul>
                  <StylePlanet>
                    Name:{"\u00a0"}
                    {item.name}
                  </StylePlanet>
                  <StylePlanet>
                    Rotation Period:
                    {item.rotation_period}
                  </StylePlanet>
                  <StylePlanet>
                    Orbital Period:
                    {item.orbital_period}
                  </StylePlanet>
                  <StylePlanet>
                    Diameter:{"\u00a0"}
                    {item.diameter}
                  </StylePlanet>
                  <StylePlanet>
                    Climate:{"\u00a0"}
                    {item.climate}
                  </StylePlanet>
                  <StylePlanet>
                    Gravity:{"\u00a0"}
                    {item.gravity}
                  </StylePlanet>
                  <StylePlanet>
                    Terrain:{"\u00a0"}
                    {item.terrain}
                  </StylePlanet>
                  <StylePlanet>
                    Surface Water:{"\u00a0"}
                    {item.surface_water}
                  </StylePlanet>
                  <StylePlanet>
                    Population:{"\u00a0"}
                    {item.population}
                  </StylePlanet>
                </Ul>
              </Parent>
            </>
          );
        })}
    </div>
  );
};

const Img = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const H1 = styled.h1`
  position: absolute;
  font-weight: bold;
  font-family: arial;
  right: 700px;
  color: #ffe81f;
`;
const Parent = styled.div`
  display: inline-block;
  padding: 10px;
  color: white;
  margin-top: 70px;
  margin-left: 20px;
  border: 2px solid #ffe81f;
  border-radius: 10px 30px;
  &:hover {
    text-shadow: 0 0 3px #ffe205, 0 0 7px #ffe205, 0 0 20px #edd205;
    color: #ffe205;
  }
  overflow: hidden;
`;
const Ul = styled.div``;

const StylePlanet = styled.div``;

export default Planets;
