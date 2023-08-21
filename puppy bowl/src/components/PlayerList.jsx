import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PlayerList({setSelectedPuppy}) {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    async function fetchPuppies() {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players')
        const result = await response.json();
        setPuppies(result.data.players);

      } catch(error) {
        console.log(error)
      }
    }
    fetchPuppies();
  },[])
  
  return (
    <>
    <div>
      <Link to='/searchBar'><button>Search Player 🔍</button></Link>
      <Link to='/newPlayer'><button>New Player</button></Link>
      {
       puppies.map((puppy) => {
        return (
        <div key={puppy.id}>
          <Link to ="/playerDetails"><img onClick={() => setSelectedPuppy(puppy.id)} src={puppy.imageUrl}/></Link>
        </div>)
       })
      }
    </div>
    </>
  );
}