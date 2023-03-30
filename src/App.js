import './App.css';
import { Routes, Route } from "react-router-dom" 
import About from './routes/About';
import Events from './routes/Events';
import Home from './routes/Home';
import Team from './routes/Team';
import Contact from './routes/Contact';
// import Example from './components/Example'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      {/* <Example />
     */}
  
    </div>
  );
}

export default App; 