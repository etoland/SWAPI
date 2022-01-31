import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OtherStar from "./Star.png";

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
      <Img src={OtherStar} />
      <H1>Starships</H1>
      {starships &&
        starships.map((item) => {
          return (
            <>
              <Parent>
                <Ul>
                  <Star>
                    Name:{"\u00a0"}
                    {item.name}
                  </Star>
                  <Star>
                    Model:{"\u00a0"}
                    {item.model}
                  </Star>
                  <Star>
                    Manufacturer:{"\u00a0"}
                    {item.manufacturer}
                  </Star>
                  <Star>
                    Cost:{"\u00a0"}
                    {item.cost_in_credits}
                  </Star>
                  <Star>
                    Length:{"\u00a0"}
                    {item.length}
                  </Star>
                  <Star>
                    Max Atmosphering Speed:{"\u00a0"}
                    {item.max_atmosphering_speed}
                  </Star>
                  <Star>
                    Crew:{"\u00a0"}
                    {item.crew}
                  </Star>
                  <Star>
                    Passengers:{"\u00a0"}
                    {item.passengers}
                  </Star>
                  <Star>
                    Cargo Capacity:{"\u00a0"}
                    {item.cargo_capacity}
                  </Star>
                  <Star>
                    Consumables:{"\u00a0"}
                    {item.consumables}
                  </Star>
                  <Star>
                    Hyperdrive Rating:{"\u00a0"}
                    {item.hyperdrive_rating}
                  </Star>
                  <Star>
                    MGLT:{"\u00a0"}
                    {item.MGLT}
                  </Star>
                  <Star>
                    Starship Class:{"\u00a0"}
                    {item.starship_class}
                  </Star>
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
  height: 150%;
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

const Star = styled.div`
  display: flex;
  font-family: Arial;
`;

export default Starships;
