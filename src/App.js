import Homepage from "./components/Homepage/Homepage"
import Projects from "./components/Projects/Projects"
import Work from "./components/Work/Work"
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import {Route, Routes} from "react-router-dom"
function App() {
  
  return (
    <>
    <Navbar />
    <div className ="container"> 
    <Routes>
      <Route path ="/" element ={<Homepage />} />
      <Route path ="/projects" element ={<Projects />} />
      <Route path ="/work" element ={<Work />} />
      
    </Routes>
   </div>
   
    </>
  
  );
}

export default App;
