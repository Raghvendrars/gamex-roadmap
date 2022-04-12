import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Roadmap from "./Views/Roadmap/Roadmap";
import Footer from "../src/Components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
          <Route path="/" element={<Roadmap />} />
       </Routes>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
