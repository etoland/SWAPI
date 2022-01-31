import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Person = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    fetch(`/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPerson(data.name);
      });
  }, [id]);
  return (
    <>
      <div>This is your person:{person} </div>
    </>
  );
};

export default Person;
