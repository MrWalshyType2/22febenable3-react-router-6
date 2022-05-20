import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

// EXAMPLE 1
// function App() {
//   return (
//     <div className="App">
//       <h1>Routing example</h1>

//       <nav id="navbar">
//         {/* Link renders to an anchor tag */}
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//     </div>
//   );
// }

// EXAMPLE 2
function App() {

  function toggleMenu() {
    const navLinks = document.querySelectorAll(".nav-link"); // select the nav links
    navLinks.forEach(element => element.classList.toggle("show"));
  }

  return (
    <div className="App">
      <h1>Routing example</h1>

      <nav id="navbar">
        {/* Link renders to an anchor tag */}

        <Link id='toggle' to="#" onClick={toggleMenu}>MENU</Link>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/users">Users</Link>
      </nav>

      {/* For example 2 (change in index.js), 
          - Outlet indicates where the subroutes get rendered
      */}
      <Outlet />
    </div>
  );
}

export default App;
