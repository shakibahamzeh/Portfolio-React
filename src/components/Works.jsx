import React,{useContext} from 'react';
import  "./works.css";
import { ThemeContext } from '../context/ThemeContextProvider';


const Works = ()=> {
  const works = [
    {id: 1 , title: "dashboard" , link : "https://dashboard-shakiba-hamzeh-react-material-ui.netlify.app/",img:"https://ucarecdn.com/f1055287-b611-435d-a511-75428c977e21/dashboard.jpg"},
    {id: 2 , title: "form" , link : "https://form-react-js-shakiba-hamzeh.netlify.app/",img:"https://ucarecdn.com/3a65a7b7-0a17-4945-9511-c44e30062b89/form.jpg"},
    {id: 3 , title: "consulting" , link : "https://consulting-demo-shakiba-hamzeh.netlify.app/",img:"https://ucarecdn.com/fc74e3f3-ec92-4557-800f-980e39b2117f/consulting.jpg"},
    {id: 4 , title: "wedding" , link : "https://wedding-demo-shakiba-hamzeh.netlify.app/",img:"https://ucarecdn.com/cb81380a-1d11-4064-af78-b96741f5226e/wedding.jpg"},
    {id: 5 , title: "transport" , link : "https://transport-shakiba-hamzeh-bootstrap4.netlify.app/",img:"https://ucarecdn.com/deff9245-908c-45d5-963e-7552c546eef9/transport.jpg"}
  ];

   const Theme = useContext(ThemeContext);
   const darkMode = Theme.state.darkMode;
    
  return (
    <div className={`worksContainer ${darkMode ? "works-dark" : "works-light"}`}>
       <h2>These are some of my projects</h2>
       <div>
         <ul>
           {
             works.map(work =><li  key={work.id} className="container">
           <a href={work.link}>
             <img src={work.img} alt="work"/>
             <h3>{work.title }</h3>
           </a>
           </li> )
           }
         </ul>
       </div>
       <div className='showMoreLink'>
         <a href='https://github.com/shakibahamzeh' target="_blank">Show All</a>
       </div>
    </div>
  )
}

export default Works