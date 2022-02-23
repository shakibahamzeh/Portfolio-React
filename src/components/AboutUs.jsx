import React,{useContext} from 'react';
import"./aboutUs.css";
import { ThemeContext } from '../context/ThemeContextProvider';

const AboutUs = () =>{
   const Theme = useContext(ThemeContext);
   const darkMode = Theme.state.darkMode;
  return (
    <div className={`aboutContainer ${darkMode ? "about-dark" : "about-light"}`}>
        <div>
            <h1>Hey I am shakiba</h1>
            <p>
                a web developer
            </p>
            <button className="aboutUsBtn">Hire Me</button>
        </div>
    </div>
  )
}

export default AboutUs