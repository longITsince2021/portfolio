import React from 'react'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Experience.css'

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Works">
        <div className="achievement">
            <div className="circle" style={{color: darkMode? 'var(--orange)' : ''}}>3rd</div>
            <span style={{color: darkMode?'white':''}} >Year</span>
            <span> student</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode? 'var(--orange)' : ''}}>5</div>
            <span style={{color: darkMode?'white':''}}>Completed</span>
            <span> projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode? 'var(--orange)' : ''}}>4+</div>
            <span style={{color: darkMode?'white':''}}>Ex-</span>
            <span>Girlfriends =))</span>
        </div>
    </div>
  )
}

export default Experience
