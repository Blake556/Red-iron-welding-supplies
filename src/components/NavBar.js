import '../styles/NavBar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="NavBar-container">
      <header className="">
      <Link to="/Welder"> <span className=''>Welder</span> </Link>
        <Link to="/Home"> <span className=''>Home</span> </Link>
       
      </header>
    </div>
  );
}

export default Navbar;
