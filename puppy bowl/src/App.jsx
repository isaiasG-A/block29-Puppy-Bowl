import './index.css'
import { Routes, Route} from "react-router-dom";
import { useState } from 'react';

import NewPlayer from './components/NewPlayer';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import SearchBar from './components/SearchBar';

function App() {
  const [setPuppyId, setSelectedPuppy] = useState();

  return (
    <>
      <Routes>
        <Route path='/searchBar' element={<SearchBar/>}/>
        <Route path='/newPlayer' element={<NewPlayer/>}/>
        <Route path="/playerDetails" element={<PlayerDetails setPuppyId={setPuppyId}/>}/>
        <Route path='/' element={<PlayerList setSelectedPuppy={setSelectedPuppy}/>}/>
      </Routes>
    </>
  )
}

export default App
