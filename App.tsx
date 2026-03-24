import "./App.css";

function App() {
 
  const name = "Bhai";
  const age = 21;

  const user = {
    name: "mahima",
    age: 22,
    city: "Indore",
  };

 
  const users = ["mahima", "harshita", "hitesh", "mahi"];

  
  function greet() {
    alert("Hello Bhai");
  }

 
  function showName(n: string) {
    alert("Hello " + n);
  }


  const isLoggedIn = true;

  return (
    <>
     
      <h1>Hello {name}</h1>
      <p>Age: {age}</p>

      <h2>
        {user.name} - {user.age} - {user.city}
      </h2>

      <button onClick={greet}>Click Me</button>
      <button onClick={() => showName(name)}>Show Name</button>

  
      <h3>{isLoggedIn ? "Welcome" : "Please Login"}</h3>


      <p>{isLoggedIn && "You are logged in"}</p>

   
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>


      <div>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
      </div>

    
      <p className="text">Styled Text</p>

      
      <p style={{ color: "blue", fontSize: "20px" }}>
        Inline Styling
      </p>
    </>
  );
}

export default App;