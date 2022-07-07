import React from 'react';
import "./Landingpage.css";
import Navbar from '../../components/Navbar/Navbar';
import { Link } from "react-router-dom";

function Landingpage() {
  return (

    <div className='lbody'>
       
       <Navbar pr={true}/>

       <div className='combine'>

            <p className="landingpagecontent_title">
                    Unlimited films, TV programmes and more.
                  </p>
                  <p className="landingpagecontent_subtitle">
                    Watch from anywhere. Cancel at anytime
                  </p>
                  <p className="landingpagecontent_description">
                    Ready to watch? Enter your email to create or restart your membership.{" "}
                  </p>

                  <div className='ldiv'>
                  <input type="text"/>
                  <Link to="/sign-in">
                      <button className="b">GET STARTED</button>
                </Link>
              </div>


       </div>

       
       
        

       

    </div>
    
    
  );
}

export default Landingpage;