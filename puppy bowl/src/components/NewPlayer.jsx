import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewPlayer() {
  const [puppyName, setPuppyName] = useState("");
  const [puppyBreed, setPuppyBreed] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const requestBody = {
        name: puppyName,
        breed: puppyBreed,
        status: status,
        imageUrl: image,
      }

      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const result = await response.json();
      console.log(result);
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Link to="/"><button>Home</button></Link>
      <h2>New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            value={puppyName}
            onChange={(event) => {setPuppyName(event.target.value)}}
          />
        </label>
        <label>
          Breed:
          <input 
            value={puppyBreed}
            onChange={(event) => {setPuppyBreed(event.target.value)}}
          />
        </label>
        <label>
          Status - field/bench:
          <input 
            value={status}
            onChange={(event) => {setStatus(event.target.value)}}
          />
        </label>
        <label>
          Image:
          <input 
            value={image}
            onChange={(event) => {setImage(event.target.value)}}
          />
        </label>
        <button >Submit</button>
      </form>
    </div>
  );
}