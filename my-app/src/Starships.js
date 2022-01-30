import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch("/starships")
      .then((res) => res.json())
      .then((data) => {
        setStarships(data.results);
        console.log(data, "STAR");
      });
  }, []);
  return (
    <div>
      <h1>Starships</h1>
      <Ul>
        {starships &&
          starships.map((item) => {
            return (
              <>
                <Star>Name:{item.name}</Star>
                <Star>Model:{item.model}</Star>
                <Star>Manufacturer:{item.manufacturer}</Star>
                <Star>Cost:{item.cost_in_credits}</Star>
                <Star>Length:{item.length}</Star>
                <Star>
                  Max Atmosphering Speed:{item.max_atmosphering_speed}
                </Star>
                <Star>Crew:{item.crew}</Star>
                <Star>Passengers:{item.passengers}</Star>
                <Star>Cargo Capacity:{item.cargo_capacity}</Star>
                <Star>Consumables:{item.consumables}</Star>
                <Star>Hyperdrive Rating:{item.hyperdrive_rating}</Star>
                <Star>MGLT:{item.MGLT}</Star>
                <Star>Starship Class:{item.starship_class}</Star>
                <Star>Pilots:{item.pilots}</Star>
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

const Star = styled.div`
  display: flex;
  font-family: Arial;
`;

export default Starships;
