import React, { useEffect, useState } from "react";
import styled from "styled-components";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.json.results);
        console.log(data, "SWAP");
      });
  }, []);
  return (
    <>
      <div>
        <h1>People</h1>
        {people &&
          people.map((item) => {
            return (
              <>
                <Ul>
                  <StylePeople>Name:{item.name}</StylePeople>
                  <StylePeople>Height:{item.height}</StylePeople>
                  <StylePeople>Weight:{item.mass}</StylePeople>
                  <StylePeople>Hair Color:{item.hair_color}</StylePeople>
                  <StylePeople>Skin Color:{item.skin_color}</StylePeople>
                  <StylePeople>Eye Color:{item.eye_color}</StylePeople>
                  <StylePeople>Birth Year:{item.birth_year}</StylePeople>
                  <StylePeople>Gender:{item.gender}</StylePeople>
                </Ul>
              </>
            );
          })}
      </div>
    </>
  );
};
const Ul = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
`;

const StylePeople = styled.div`
  display: flex;
  font-family: Arial;
`;

export default People;
