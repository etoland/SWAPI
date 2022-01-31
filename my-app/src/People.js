import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typeahead from "./Typeahead";

const People = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.json.results);
      });
  }, []);
  return (
    <>
      <div>
        <Typeahead
          suggestions={people}
          handleSelect={(target) => {
            window.alert(target);
          }}
        />
        <H1>Pick Your Character:</H1>
        {people &&
          people.map((item) => {
            return (
              <>
                <Parent>
                  <Ul>
                    <StylePeople>
                      Name:{"\u00a0"}
                      {item.name}
                    </StylePeople>
                    <StylePeople>
                      Height:{"\u00a0"}
                      {item.height}
                    </StylePeople>
                    <StylePeople>
                      Weight:{"\u00a0"}
                      {item.mass}
                    </StylePeople>
                    <StylePeople>
                      Hair Color:{"\u00a0"}
                      {item.hair_color}
                    </StylePeople>
                    <StylePeople>
                      Skin Color:{"\u00a0"}
                      {item.skin_color}
                    </StylePeople>
                    <StylePeople>
                      Eye Color:{"\u00a0"}
                      {item.eye_color}
                    </StylePeople>
                    <StylePeople>
                      Birth Year:{"\u00a0"}
                      {item.birth_year}
                    </StylePeople>
                    <StylePeople>
                      Gender:{"\u00a0"}
                      {item.gender}
                    </StylePeople>
                  </Ul>
                </Parent>
              </>
            );
          })}
      </div>
    </>
  );
};

const H1 = styled.h1`
  position: absolute;
  color: #ffe81f;
  top: 250px;
  right: 1000px;
`;
const Parent = styled.div`
  display: inline-block;
  padding: 15px;
  width: 200px;
  height: 200px;
  border: 2px solid #ffe81f;
  border-radius: 10px 30px;
  margin-left: 15px;
  margin-top: 15px;
  &:hover {
    box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
      0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
  }
`;

const Ul = styled.div`
  font-family: arial;
  color: #ffe81f;
`;

const StylePeople = styled.div`
  padding: 3px;
  max-width: 200px;
`;

export default People;
