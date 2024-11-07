import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(""); // State for handling errors

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  async function jokegenerator() {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) throw new Error("Failed to fetch joke");
      const data = await response.json();
      setJoke(data.fact);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  }

  return (
    <>
      <h1 className="p">hello..........</h1>
      <button onClick={decrement}>Decrement</button>
      <span>{count}</span>
      <button onClick={increment}>Increment</button><br />
      <button onClick={jokegenerator}>Joke Generator</button>
      <p style={{ color: "red", fontSize: "20px" }}>{joke}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default App;
