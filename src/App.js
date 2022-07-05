import './App.css';
import { BrowserRouter,Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./Component/Navigationbar";
import Primarynavbar from "./Component/Primarynavbar";
import Footer from './Component/Footer'
import Home from "./Component/Home";
import Aboutus from './Component/Aboutus';
import Services from './Component/Services';
import Technology from './Component/Technology';
import News from './Component/News';
import Contact from './Component/Contact';
import Interview from './Component/Inteview';
import Commingsoon from './Component/Commingsoon';
function App() {
  return (
    <BrowserRouter> 
        <Primarynavbar />
        <Navigationbar />
      <Routes>  
          <Route exact path='/' element={< Home />}></Route>  
          <Route exact path='/about-us' element={< Aboutus />}></Route>
          <Route exact path='/Services' element={< Services />}></Route>  
          <Route exact path='/technology' element={< Technology />}></Route> 
          <Route exact path='/interview' element={< Interview />}></Route>  
          <Route exact path='/news' element={< News />}></Route>  
          <Route exact path='/contact-us' element={< Contact />}></Route>  

          <Route exact path='/privacy' element={< Commingsoon />}></Route>  
          <Route exact path='/terms' element={< Commingsoon />}></Route>  
          <Route exact path='/media-kit' element={< Commingsoon />}></Route>  
          <Route exact path='/sitemap' element={< Commingsoon />}></Route>  
          <Route exact path='/bug' element={< Commingsoon />}></Route>  
          <Route exact path='/FAQ' element={< Commingsoon />}></Route>  
          <Route exact path='/partners' element={< Commingsoon />}></Route>  
          <Route exact path='/tutorials' element={< Commingsoon />}></Route>  
          <Route exact path='/stories' element={< Commingsoon />}></Route>  
          <Route exact path='/consultants' element={< Commingsoon />}></Route>  
          <Route exact path='/ideas' element={< Commingsoon />}></Route>  
          <Route exact path='/certifications' element={< Commingsoon />}></Route>  

      </Routes>  
      <Footer />
    </BrowserRouter>  
  );
}

export default App;
