import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
      <h1>Planets</h1>
      <Ul>
        {planets &&
          planets.map((item) => {
            return (
              <>
                <StylePlanet>Name:{item.name}</StylePlanet>
                <StylePlanet>
                  Rotation Period:
                  {item.rotation_period}
                </StylePlanet>
                <StylePlanet>
                  Orbital Period:
                  {item.orbital_period}
                </StylePlanet>
                <StylePlanet>Diameter:{item.diameter}</StylePlanet>
                <StylePlanet>Climate:{item.climate}</StylePlanet>
                <StylePlanet>Gravity:{item.gravity}</StylePlanet>
                <StylePlanet>Terrain:{item.terrain}</StylePlanet>
                <StylePlanet>Surface Water:{item.surface_water}</StylePlanet>
                <StylePlanet>Population:{item.population}</StylePlanet>
              </>
            );
          })}
      </Ul>
    </div>
  );
};

const Ul = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
`;

const StylePlanet = styled.div`
  display: flex;
  font-family: Arial;
`;

export default Planets;
