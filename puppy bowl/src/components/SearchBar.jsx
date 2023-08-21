import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [fetchedName, setFetchedName] = useState([]);
  const [result, setResult] = useState([]);


  useEffect(() => {
    async function fetchPuppy() {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players');
        const result = await response.json();
        setFetchedName(result.data.players);

      } catch(error) {
        console.log(error)
      }
    }
    fetchPuppy();
  },[])

  async function handleSubmit(event) {
    event.preventDefault();

    let i = 0;
      while(i < fetchedName.length) {
        if(userInput === fetchedName[i].name) {
          setResult(<h4>{userInput}</h4>)
          break;
          } else {
            setResult(<h4>Cant find Player</h4>)
          }
          i++;
        } 
    }

  return (
    <div>
      <Link to='/'><button>Home</button></Link>
      <form onSubmit={handleSubmit}>
        <label> 
          Name
          <input 
           type="text"
            value={userInput}
            onChange={(event) => {setUserInput(event.target.value)}}
          />
        </label>
      </form >
      {result}
    </div>
  );
}

