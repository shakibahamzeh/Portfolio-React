import React,{useContext} from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContextProvider';

const Navbar = () =>{
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;
    const DarkModeHandler = () => {
    if (darkMode)
      Theme.dispatch({ type: "LIGHT_MODE" });
    else
      Theme.dispatch({ type: "DARK_MODE" });
  };

  return (
    <header className={`header ${darkMode ? "header-dark" : "header-light"}`}>
        <div className="logo">
            <h2>PORTFOLIO</h2>
        </div>
        <nav>
            <ul className="menu">
                <li><Link to='/aboutUs'>About</Link></li>
                <li><Link to='/works'>Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="darkModeBtnWrapper">
            
	        <input type="checkbox" id="toggle" className={`darkBtn ${darkMode ? "darkBtn-dark" : "darkBtn-light"}`} onClick={DarkModeHandler}/>
	        <label for="toggle"></label>

        </div>
    </header>
  )
}

export default Navbar