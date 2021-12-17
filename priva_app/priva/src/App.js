import Home from './components/Home';
import AddOwners from './components/AddOwners';
import ProfileOwner from './components/ProfileOwner';
import './App.css';
import { Routes, Route } from 'react-router-dom';





function App() {
  
  return (
   
    <div >
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/addOwners" element={<AddOwners/>}/>
    <Route path="/Owner/:id" element={<ProfileOwner/>}/>
    </Routes>
     
    </div>
   
  );
}

export default App;
