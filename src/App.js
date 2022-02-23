
import './App.css';

import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import Contact from './components/Contact';
import Works from './components/Works';
import ThemeContextProvider from './context/ThemeContextProvider';

function App() {
 
  return (
    <ThemeContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/*" element={<AboutUs/>}/>
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
