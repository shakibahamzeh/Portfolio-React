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
                I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer to be using.
            </p>
        </div>
    </div>
  )
}

export default AboutUs