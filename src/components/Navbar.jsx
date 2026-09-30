import React from 'react'
import logo from '../assets/site_logo.png'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'
import { useState } from 'react'

const Navbar = () => {

    const [isToggled, setToggle] = useState(false);
    const handleToggle =()=>{
        setToggle(!isToggled);
    }
    return (
    <nav>
        <div className="nav-container">
            <img src={logo} alt="logo" className="logo"/>
            {/* <!-- main menu --> */}
            <div className="main-menu">
                {/* <ul className="main-menu-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#tours">Tours</a></li>
                </ul> */}
                <PageLinks groupClass="main-menu-list"/>
            </div>

            {/* <!-- mobile menu --> */}
            <div className="mobile-menu">
                <div className="mobile-menu-toggle">
                    <button onClick={()=>handleToggle(!isToggled)}><i className="fa-solid fa-bars"/></button>
                    <div className={isToggled?"mobile-menu-items active":"mobile-menu-items"}>
                        <PageLinks groupClass="mobile-menu-list"/>
                        {/* <ul className="mobile-menu-list">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#tours">tours</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>

            {/* <ul className="nav-icons">
                <li><a href="#" className="nav-icon"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="#" className="nav-icon"><i className="fa-brands fa-threads"></i></a></li>
                <li><a href="#" className="nav-icon"><i className="fa-brands fa-x-twitter"></i></a></li>

            </ul> */}
            <SocialLinks groupClass="nav-icons" listItemClass={"nav-icon"}/>
        </div>

    </nav>
  )
}

export default Navbar