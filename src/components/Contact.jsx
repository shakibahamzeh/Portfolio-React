import React,{useContext} from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';
import "./contact.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact=() =>{
   const Theme = useContext(ThemeContext);
   const darkMode = Theme.state.darkMode;
  return (
    <div className={`contactContainer ${darkMode ? "contact-dark" : "contact-light"}`}>
        <div className="title">
          <h3>Let's work together...</h3>
        </div>
        <div>
          <ul>
            <li><a href="https://github.com/shakibahamzeh" target="_blank" rel="noreferrer">
              <GitHubIcon className="contactIcon"/>
              Github</a></li>
            <li><a href="mailto:shakiba.hamzeh70@gmail.com" target="_blank" rel="noreferrer">
              <MailIcon className="contactIcon"/>
              Mail</a></li>
            <li><a href="tel:09358836780" target="_blank" rel="noreferrer"> 
              <LocalPhoneIcon className="contactIcon"/>
              Call Me</a></li>
              <li><a href="https://www.linkedin.com/in/shakiba-hamze-69a69582/" target="_blank" rel="noreferrer"> 
              <LinkedInIcon className="contactIcon"/>
              LinkedIn</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Contact;