import { Link } from "react-router-dom";
import styles from "./MainHome.module.css";

import React from 'react';

import logo from './Images/fdmnew.svg';


//get the current time and output greeting based on time
function getTimeGreeting(){
    var timeNow = new Date();
    var hour = timeNow.getHours();
    console.log(hour);
    if(hour >= 0 && hour < 12){
        return "Morning";
    }
    else if(hour >= 12 && hour < 18){
        return "Afternoon";
    }
    else{
        return "Evening";
    }
}

function MainHome(){
    document.title = "Landing Page";
    return (
       <>
          <div className={styles.landingPageBackground}> {/* Background container */}
            <div className={styles.logoContainer}>
              <img src={logo} alt="FDM Logo" className={styles.logo}/>
              <h1>Timesheets</h1>
            </div>
            <div id={styles.landing_page} className={styles.MainHome}>
              <h2>
                Good {getTimeGreeting()}
                <span className={styles.fullstop}>.</span>
              </h2>
              <Link className={styles.Link} to="/login_page">
                <button type="button">Login</button>
              </Link>
            </div>
          </div>
        </>
    )
}

//<Link className={styles.Link} to="/"><p>Home</p></Link><br/><br/>
export default MainHome;