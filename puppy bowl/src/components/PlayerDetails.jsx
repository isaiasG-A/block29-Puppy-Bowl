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

  async function deletePlayer() {
try {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${setPuppyId}`,
    {
      method: 'DELETE',
    }
  );
  const result = await response.json();
  console.log(result);
} catch (err) {
  console.error(err);
}
} 

 

  return (
    <div>
      <h3>Name: {puppy.name}</h3>
      <h3>Breed: {puppy.breed}</h3>
      <img src={puppy.imageUrl}/>
      <Link to="/"><button onClick={deletePlayer}>Delete Puppy</button></Link>
      <Link to="/"><button>Home</button></Link>
    </div>
  );
}