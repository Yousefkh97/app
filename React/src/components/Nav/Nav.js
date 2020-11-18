import React from 'react';
import './Nav.css';
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import {
    BrowserRouter as Router,
    Link,
    useLocation

} from "react-router-dom";

//icons
import logo from "../../img/JiraphLogo.jpg"
import regIcon from "../../img/loginB2.png"
import adminIcon from "../../img/adminB2.png"
import statusIcon from "../../img/statusB.png"
import analysisIcon from "../../img/analyticsB.png"
import trademarkIcon from "../../img/trademark.png"
import { useState } from 'react';
export default props => {

    let location = useLocation().pathname;
    let token = Cookies.get('loginToken');
    // const [render,setRender]=useState(Math.random())


    //if there is no cookies dont show nav bar
    if(!token){
        
    return (
        <nav className="sidebar__login">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
            {/* <div className="sidebar__header-wrapper">
                <img className="jiraph__logo" src={logo} alt="this is a logo" />JIRAPH
            </div>
            <div className="menu__wrapper"></div>
            <div className="sidebar__footer">
                DELL-Jiraph 
            </div> */}
        </nav>
    )

    }

    if (token != null) {
        const decoded = jwt.decode(token);
        //show the respective bar by the role
        if (decoded.role === 'Admin') {
            return (
                <nav className="sidebar">
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
                    <div className="sidebar__header-wrapper1">
                        <img className="jiraph__logo" src={logo} alt="this is a logo" />
                   JIRAPH
                  </div>
                    <div className="menu__wrapper-1">
                        <div className='menu__item' >
                            <Link className={location === "/register" ? 'menu__link menu__link--selected' : "menu__link"} to="/" ><img className="register__logo" src={regIcon} alt="this is a logo" />Log Out</Link>
                        </div>
                    </div>

                    <div className="sidebar__footer">
                        DELL-Jiraph 
                    </div>
                </nav>
            )
        }
        else{
            return (
                <nav className="sidebar">
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
                    <div className="sidebar__header-wrapper2">
                        <img className="jiraph__logo" src={logo} alt="this is a logo" />
                   JIRAPH
                  </div>
        
                    <div className="menu__wrapper-2">
        
                        <div className='menu__item'>
        
                            <Link className={location === "/register" ? 'menu__link menu__link--selected' : "menu__link"} to="/"><img className="register__logo" src={regIcon} alt="this is a logo" />Log Out</Link>
                        </div> 
                        <div className="menu__item">
                            <Link className={location === "/status" ? 'menu__link menu__link--selected' : "menu__link"} to="/status"><img className="status__logo" src={statusIcon} alt="this is a logo" />Status</Link>
                        </div>
        
                        <div className="menu__item">
                            <Link className="menu__link" to="/analysis"><img className="analysis__logo" src={analysisIcon} alt="this is a logo" />Analysis</Link>
                            <div className={
                                location === "/ModificationByField"
                                    || location === "/DeletedJiraTickets"
                                    || location === "/ChangesInJiraTickets"
                                    || location === "/ChangesInParentID"
                                    || location === "/DelaysInDelivery"
                                    ? 'analysis-options--show' :
                                    "analysis-options"}>
        
                                <div className="analysis__item">
                                    <Link className={location === "/ModificationByField" ? 'menu__subLink menu-subLink--selected' : "menu__subLink"} to="/ModificationByField">Modification By Field</Link>
        
                                </div>
        
                                <div className="analysis__item">
                                    <Link className={location === "/DeletedJiraTickets" ? 'menu__subLink menu-subLink--selected' : "menu__subLink"} to="/DeletedJiraTickets">Deleted Jira Tickets</Link>
                                </div>
                                <div className="analysis__item">
                                    <Link className={location === "/ChangesInJiraTickets" ? 'menu__subLink menu-subLink--selected' : "menu__subLink"} to="/ChangesInJiraTickets">Changes In Jira Tickets</Link>
                                </div>
                                <div className="analysis__item">
                                    <Link className={location === "/ChangesInParentID" ? 'menu__subLink menu-subLink--selected' : "menu__subLink"} to="/ChangesInParentID">Changes In Parent ID</Link>
                                </div>
                                <div className="analysis__item">
                                    <Link className={location === "/DelaysInDelivery" ? 'menu__subLink menu-subLink--selected' : "menu__subLink"} to="/DelaysInDelivery">Delays In Delivery</Link>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="sidebar__footer">
                        DELL-Jiraph 
                    </div>
                </nav>
            )

        }


    }
  
}