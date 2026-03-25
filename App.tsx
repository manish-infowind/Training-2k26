import { useState, useEffect } from "react";

export default function Form() {

  const [person, setPerson] = useState({
    firstName: "mahima",
    lastName: "raikwar",
    email: "mahi@gmail.com"
  });

 
  const [count, setCount] = useState(0);

  const [show, setShow] = useState(true);

 
  useEffect(() => {
    console.log("Person updated:", person);
  }, [person]);

  
  function handleChange(e) {
    const { name, value } = e.target;

    setPerson({
      ...person,
      [name]: value
    });
  }

  return (
    <>
      <h2>Form Example</h2>


      {show && (
        <>
          <input
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />

          <input
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />

          <input
            name="email"
            value={person.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </>
      )}

      <button onClick={() => setShow(!show)}>
        Toggle Form
      </button>

     
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>

      <hr />

  
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}