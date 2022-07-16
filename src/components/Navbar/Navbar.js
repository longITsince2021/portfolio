import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Longoodboy</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            Home
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            Abilities
                        </Link>
                        <Link spy={true} to='Works' smooth={true}>
                            Education
                        </Link>
                        <Link spy={true} to='Feedback' smooth={true} >
                            Feedback
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to="Contact" smooth={true}>
                    <button className="button n-button"> Contact me</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
