import './index.css'
import { Routes, Route} from "react-router-dom";
import { useState } from 'react';

import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';

function App() {
  const [setPuppyId, setSelectedPuppy] = useState();

  return (
    <>
      <Routes>
        <Route path="/playerDetails" element={<PlayerDetails setPuppyId={setPuppyId}/>}/>
        <Route path='/' element={<PlayerList setSelectedPuppy={setSelectedPuppy}/>}/>
      </Routes>
    </>
  )
}

export default App
