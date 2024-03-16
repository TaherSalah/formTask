
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Form from './page/FormComponent';
import NavbarComponent from './page/Navbar';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";  
import Home from './page/Home';
function App() {
  
  return (
    <BrowserRouter>
    <NavbarComponent />
    <Routes>
    <Route  path="/" element={<Home/>} />

    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  );
}

export default App;
