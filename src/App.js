import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [joke, setJoke] = useState("");
  const [anotherJoke, setAnotherJoke] = useState("")

  const getJoke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
          setJoke(response.data.value)
      });
  };

  const getJokeWithFetch = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
          setAnotherJoke(data.value)
      });
  };

  return (
    <div className="App">
      <button onClick={getJoke}>Get a joke</button>
      <div>
        {joke}
      </div>
      <button onClick={getJokeWithFetch}>Get another joke</button>
      <div>
        {anotherJoke}
      </div>
    </div>
  );
}

export default App;
