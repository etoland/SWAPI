import React, { useState } from "react";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect, onClick }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Div>
        <InputCont>
          <Input
            value={value}
            type="text"
            onChange={(ev) => setValue(ev.target.value)}
          />
          <Button
            onClick={() => {
              setValue("");
            }}
          >
            Clear
          </Button>
        </InputCont>
        {value.length >= 2 && (
          <Ul>
            {suggestions.map((target) => {
              let firstName = target.name;
              let heightInfo = target.height;
              let birthYear = target.birth_year;
              let genderInfo = target.gender;

              if (target.name.toLowerCase().includes(value.toLowerCase())) {
                return (
                  <List
                    onClick={() => {
                      handleSelect(target.name);
                    }}
                  >
                    <Span>{firstName}</Span>
                    <More>Height: {heightInfo}</More>
                    <BirthInfo>Birthday: {birthYear}</BirthInfo>
                    <GenderInfo>Gender: {genderInfo}</GenderInfo>
                  </List>
                );
              }
            })}
          </Ul>
        )}
      </Div>
    </>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15%;
  margin-left: 30%;
  flex-direction: column;
  width: 240px;
  height: 240px;
`;

const InputCont = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-width: 500px;
  margin-top: 100px;
`;
const Span = styled.div`
  font-weight: bold;
  color: #ffe81f;
`;

const More = styled.div`
  color: #ffe81f;
`;

const Input = styled.input`
  width: 250px;
  :focus {
    outline: 2px solid #ffe205;
  }
`;

const Button = styled.button`
  background-color: #ffe81f;
  color: black;
  border: none;
  margin-left: 10px;
  width: 85px;
  height: 45px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px grey;
  }
`;

const Ul = styled.ul`
  width: 500px;
  margin-top: 5px;
  border: 1px solid;
  color: black;
  font-style: bold;
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
`;
const List = styled.li`
  margin: 15px;
  :hover {
    background-color: black;
    cursor: pointer;
  }
`;

const BirthInfo = styled.div`
  color: #ffe81f;
`;

const GenderInfo = styled.div`
  color: #ffe81f;
`;
export default Typeahead;
