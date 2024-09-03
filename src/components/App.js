import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Welders from './Welders';
import Footer from './Footer';



function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       
      </header>
      <body>
        <NavBar />
        <Routes>
        <Route path="/Welders" element={<Welders />} />
        
          {/* <Route path="/Home" element={<Home />} /> */}
          
        </Routes>
      
        
       
        <Footer />
      </body>
    </div>
    </Router>
  );
}

export default App;
