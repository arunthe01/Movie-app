// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './container/Landingpage/Landingpage';
import Signinbody from './container/SIgninbody/Signinbody';
import Homepage from './container/Homepage/Homepage';

function App() {

 const isUserLoggedIn = true;

  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element = {isUserLoggedIn ?  <Homepage /> : <Landingpage/>}/>
          <Route path="/sign-in" element={<Signinbody />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
