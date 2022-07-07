import React from 'react';
import "./Navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import movie from "../../images/movie.png";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar({pr,logout,show}) {

  const [dark, setdark] = useState(false);


const transitionNavbar= ()=> {
     if(window.scrollY > 100){
      setdark(true);
     }
     else{
      setdark(false);
     }
}

useEffect(() => {
  
    window.addEventListener("scroll",transitionNavbar);

    return()=>{
      window.removeEventListener("scroll",transitionNavbar);
    }
  
}, [])



  return (
   <div className={`navdiv ${show && 'navcolor'} ${dark && 'dc'}`}>
        
        <img src={movie} className='logo'/>

      {
       pr ? (<Link to="/sign-in">
                <button className="s"> SIGN-IN</button>
           </Link>):(" ")

      }

      {
        logout && <img src={user} className="userimg"/>

      }

    </div>
  );
}

export default Navbar