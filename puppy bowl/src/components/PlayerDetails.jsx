import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PlayerDetails({setPuppyId}) {
  const [puppy, setPuppy] = useState({});

  useEffect(() => {
    async function fetchPuppy() {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${setPuppyId}`);
        const result = await response.json();
        setPuppy(result.data.player);
      } catch(error) {
        console.log(error)
      } 
    }
    fetchPuppy()
  },[])
  return (
    <div>
      <h3>{puppy.name}</h3>
      <h3>{puppy.breed}</h3>
      <img src={puppy.imageUrl}/>
      <button>Delete Puppy</button>
      <Link to="/"><button>Home</button></Link>
    </div>
  );
}