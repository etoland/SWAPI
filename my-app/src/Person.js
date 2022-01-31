import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Person = () => {
  const params = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    fetch("/people/:id/").then((data) => {
      setPerson(data.json.results);
    });
  }, []);
};

export default Person;
