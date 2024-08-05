import React, { useEffect, useState } from 'react'
import "./NavbarStyle.css"
import logo from "../../assets/imgAssets/logo1.png"

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(true);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return (
        <>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <img src={logo} className='logo' alt="" />
                <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                    <li><Link to='hero'
                        smooth={true}
                        offset={0}
                        durastion={500}
                    >Home</Link></li>

                    <li><Link to='services'
                        smooth={true}
                        offset={-260}
                        durastion={500}>Services</Link></li>
                    <li> <Link to='about'
                        smooth={true}
                        offset={-150}
                        durastion={500}>About Us</Link></li>
                    <li><Link to='campus'
                        smooth={true}
                        offset={-260}
                        durastion={500}>Campus</Link></li>
                    <li><Link to='testimonials'
                        smooth={true}
                        offset={-260}
                        durastion={500}>Testimonials</Link></li>
                    <li><Link to='contact'
                        smooth={true}
                        offset={-260}
                        durastion={500} className='btn'>Contact Us</Link> </li>
                </ul>
                <span><RxHamburgerMenu className='menu-icon' onClick={toggleMenu} /></span>
            </nav>
        </>
    )
}
