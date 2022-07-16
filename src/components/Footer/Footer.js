import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"
import Github from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Telegram from '@iconscout/react-unicons/icons/uil-telegram'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} style={{width: '100%'}}/>
        <div className="footer-content">
            <span>longnguyen5112000@gmail.com</span>
            <div className="footer-icons">
                <Github color="white" size="3rem"/>
                <Facebook color="white" size="3rem"/>
                <Telegram color="white" size="3rem"/>
            </div>
        </div>
    </div>
  )
}

export default Footer
