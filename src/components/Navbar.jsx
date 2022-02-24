import React,{useContext , useState,useEffect} from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContextProvider';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () =>{
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;
    const DarkModeHandler = () => {
    if (darkMode)
      Theme.dispatch({ type: "LIGHT_MODE" });
    else
      Theme.dispatch({ type: "DARK_MODE" });
  };
   const [toggleMenu, setToggleMenu] = useState(false);
   const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const MenuHandler =()=>{
     setToggleMenu(!toggleMenu)
  }
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);
     return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <header className={`header ${darkMode ? "header-dark" : "header-light"}`}>
        <div className="logo">
            <h2>PORTFOLIO</h2>
        </div>
        <nav>
           {(toggleMenu || screenWidth >768) && (
            <ul className="menu">
                <li><Link to='/aboutUs'>About</Link></li>
                <li><Link to='/works'>Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
           )}
            
        </nav>
        <div className='menuIconWrapper'>
              <MenuIcon className='menuIcon' onClick={MenuHandler}/>
            </div>
        <div className="darkModeBtnWrapper">
            
	        <input type="checkbox" id="toggle" className={`darkBtn ${darkMode ? "darkBtn-dark" : "darkBtn-light"}`} onClick={DarkModeHandler}/>
	        <label htmlFor="toggle"></label>

        </div>
    </header>
  )
}

export default Navbar