import React,{useContext} from 'react';
import"./aboutUs.css";
import { ThemeContext } from '../context/ThemeContextProvider';

const AboutUs = () =>{
   const Theme = useContext(ThemeContext);
   const darkMode = Theme.state.darkMode;
  return (
    <div className={`aboutContainer ${darkMode ? "about-dark" : "about-light"}`}>
        <div>
            <h1>Hey I am Shakiba</h1>
            <p>
               I am a creative and self-starting Front-End Developer with more than 1-year experience building and maintaining responsive websites in fast-paced, collaborative environments. Proficient in HTML / CSS / JavaScript / JQuery / React ; plus modern libraries and frameworks. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. The list of projects contained in my portfolio will give you a good idea of the level of my knowledge. 
            </p>
        </div>
    </div>
  )
}

export default AboutUs