import React from 'react'
import Dev from "../../img/dev.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Works.css'


const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="w-left">
        <div className="awesome">
            <span  style={{color: darkMode?'white':''}}>Study Software Engineering in</span>
            <span>FPT University</span>
            <span style={{color: darkMode?'white':''}}>
            I started studying at FPT University in Ho Chi Minh City since 2019.
                <br/>
                My major is software engineering. Currently, I am about to become an intern
                <br/>
                and I am focusing on website development.
            </span>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        </div>
        <div className="w-right">
          <div className="w-dev">
            <img src={Dev} alt="" />
          </div>
        </div>      
    </div>
  )
}

export default Works
