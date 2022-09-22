import React, { useState } from "react";

export const POSTMETHOD = () => {
  const [personDetails, setPersonDetails] = useState({
    fullName: "",
    age: "",
    email: "",
    adress: ""
  });
  const [show, setShow] = useState(false);
  const handleFormUpdate = (e) => {
    setPersonDetails({
      ...personDetails,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <label htmlFor=""> NAME</label>
      <input
        onChange={(e) => handleFormUpdate(e)}
        name="fullName"
        type="text"
        placeholder="enter name"
      />
      <label htmlFor=""> AGE</label>
      <input
        onChange={(e) => handleFormUpdate(e)}
        name="age"
        type="text"
        placeholder="enter age"
      />
      <label htmlFor=""> EMAIL</label>
      <input
        onChange={(e) => handleFormUpdate(e)}
        name="email"
        type="text"
        placeholder="enter email"
      />
      <label htmlFor=""> ADRESS</label>
      <input
        onChange={(e) => handleFormUpdate(e)}
        name="adress"
        type="text"
        placeholder="enter adress"
      />
      <button onClick={() => setShow(!show)}>SUBMIT</button>
      <p>{show && JSON.stringify(personDetails)}</p>
    </div>
  );
};
